import { createServer, Factory, Model } from "miragejs"
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
            server.createList('user', 50)
        },
        
        routes() {
            this.namespace = 'api'
            this.timing = 500

            this.get('/users/')
            this.post('/users/')

            this.namespace = ''
            this.passthrough()
        }
    })

    return server
}