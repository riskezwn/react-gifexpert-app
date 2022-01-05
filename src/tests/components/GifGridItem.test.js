import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('prueba en el componente <GifGridItem />', () => {

    const title = 'Título';
    const url = 'https://google.com/hola';
    const wrapper = shallow(
        <GifGridItem
            title={title}
            url={url}
        />
    );

    test('debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un párrafo con el título', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('debe de tener la clase animate_fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.hasClass('animate__fadeIn')).toBeTruthy();
    })

})
