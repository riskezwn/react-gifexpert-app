import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('pruebas en el componente <GifExpertApp />', () => {
    test('debe mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar una lista de categorias', () => {
        const categories = ['One Punch', 'Rick and Morty'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').lenght).toBe(categories.lenght);

    })


});


