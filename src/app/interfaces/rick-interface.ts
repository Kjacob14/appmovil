export interface RickResponse {
    info:any;
    results:[]


}

// interfaces de ejemplo respuesta del servicio
export interface info {
    count:number;
    pages:number;
}

// interfaces de ejemplo personaje
export interface Personaje {
    id:number;
    name:string;
    status:string;
    species:string;
    gender:string;
    origin:string;
    image:string;

}
