
export const Api = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({baseUrl: "https://pokeapi.co/api/v2/pokemon/"}),
    endpoints: (builder) => ({
        getPokemonById: builder.query<Pokemon.number>({
            query: (id) => `${id}`
        })
    })
})

export const {getPokemonByHisId}  = Api