import { getGifs } from "../../helpers/getGifs"

describe('pruebas con getGifs Fetch', () => {
    
    test('debe de devolver 10 elementos', async() => {
        const gifs = await getGifs('Rick and Morty');
        expect(gifs.length).toBe(10);
    })

    test('no debe devolver ningún elemento si no se le pasa la categoria', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
    

})
