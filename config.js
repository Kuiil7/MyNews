const dev={
    API_URL:"http://localhost:3000"
}

const prod={
    API_URL:"acb6921b9e154a198dff2d4b65846e31"
}
const config=process.env.NODE_ENV=='development'?dev:prod

export default  config

