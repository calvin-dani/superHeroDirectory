export interface HeroBioTemplate {
    name: string,
    fullname: string,
    aliases: string[],
    "place-of-birth": string,
    alignment: string,
    base: string,
    image: string,
    powerstats: {
        intelligence: string,
        strength: string,
        speed: string,
        durability: string,
        power: string,
        combat: string
    },
    gender: string,
    height: string,
    weight: string,
    race: string,
    occupation: string,
    relatives: string,
}   

