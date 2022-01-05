import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('pruebas en el hook useFetchGifs', () => {

    test('debe de devolver el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Rick and Morty'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    });

    test('debe de devolver un array con imagenes y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Rick and Morty'));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBeFalsy();
    });

});
