import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('pruebas en el componente <GifGrid />', () => {
    
    const category = 'Rick and Morty';
    
    test('debe mostrar correctamente el componente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => {

        const gifs = [{
            id: 'ABC123',
            url: 'https://google.com/img',
            title: 'title'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    

    
});
