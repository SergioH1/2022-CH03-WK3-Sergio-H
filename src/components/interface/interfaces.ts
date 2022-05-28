export interface iPokemon {
    abilities: Array<{
        ability: {
            name: string;
            url: string;
        };
        is_hidden: boolean;
        slot: number;
    }>;
    height: number;
    id: number;
    name: string;
    types: Array<{
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }>;
    weight: number;
    sprites: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
        other: {
            dream_world: {
                front_default: string;
                front_female: string;
            };
            home: {
                front_default: string;
                front_female: string;
                front_shiny: string;
                front_shiny_female: string;
            };
            'official-artwork': {
                front_default: string;
            };
        };
    };
}
