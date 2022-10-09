export interface PokemonResultsPagination<T> {
    count: number;
    next: string;
    previous: string;
    results: Array<T>;
}
