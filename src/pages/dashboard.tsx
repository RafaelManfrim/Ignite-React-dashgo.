import dynamic from 'next/dynamic'
import { Flex, SimpleGrid, Box, Text, theme, grid } from "@chakra-ui/react";
import { Header, Sidebar } from "../components/Template";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

const opitons = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        forecolor: theme.colors.gray[500]
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        axisBorder: {
            color: theme.colors.gray[400]
        },
        axisTicks: {
            color: theme.colors.gray[400]
        },
        categories: [
            "18 Mar",
            "19 Mar",
            "20 Mar",
            "21 Mar",
            "22 Mar",
            "23 Mar"
        ]
    },
    colors: [theme.colors.pink[600], theme.colors.green[600]],
    fill: {
        colors: [theme.colors.pink[400], theme.colors.green[400]],
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.6,
            opacityTo: 0.3
        }
    }
}

const series = [
    { name: 'Prova 1', data: [32, 120, 37, 150, 51, 78] },
    { name: 'Prova 2', data: [2, 178, 68, 123, 159, 35] }
]

const series2 = [
    { name: 'series2', data: [2, 222, 68, 123, 220, 35] }
]

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" maxWidth="1480px" mx="auto" px="6">
                <Sidebar />
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box p="6" pb="2" bg="gray.800" borderRadius="8px">
                        <Text fontSize="lg" mb="4" ml="5">Inscritos da semana</Text>
                        <Chart options={opitons} series={series} type="area" height="160px" />
                    </Box>
                    <Box p="6" pb="2" bg="gray.800" borderRadius="8px">
                        <Text fontSize="lg" mb="4" ml="5">Taxa de abertura</Text>
                        <Chart options={opitons} series={series2} type="area" height="160px" />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}