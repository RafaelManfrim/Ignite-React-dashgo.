import { createServer, Factory, Model, Response } from "miragejs"
import faker from 'faker'

type User = {
    name: string
    email: string
    createdAt: string
}

export function makeServer() {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },

        factories: {
            user: Factory.extend({
                name(i) {
                    return `User ${i + 1}`
                },
                email() {
                    return faker.internet.email().toLowerCase()
                },
                createdAt() {
                    return faker.date.recent(1000)
                },
            })
        },

        seeds(server) {
            server.createList('user', 250)
        },
        
        routes() {
            this.namespace = 'api'
            this.timing = 500

            this.get('/users/', function (this: any, schema, request) {
                const { page = 1, per_page = 10 } = request.queryParams

                const total = schema.all('user').length

                const pageStart = (+page - 1) * +per_page 
                const pageEnd = pageStart + +per_page

                const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd)

                return new Response(200, {'x-total-count': `${total}`}, { users })
            })
            this.post('/users/')

            this.namespace = ''
            this.passthrough()
        }
    })

    return server
}