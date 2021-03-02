import  Form  from './Form';
import { shallow,configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter:new Adapter()});
describe('<Form />',() => {

    describe('Renderiza un formulario para agregar un videojuego', () => {
      let wrapper;
      beforeEach(() => {
        wrapper = shallow(<Form />);
      })
      it('Renderiza un <form>', () => {
        expect(wrapper.find('form')).toHaveLength(1)
      })
      it('Renderiza un input con la propiedad "name" igual a "name"', () => {
        expect(wrapper.find('input[name="name"]')).toHaveLength(1);
      })
      it('Renderiza un input con la propiedad "name" igual a "description"', () => {
        expect(wrapper.find('textarea[name="description"]')).toHaveLength(1);
      })
      it('Renderiza un input con la propiedad "name" igual a "released"', () => {
        expect(wrapper.find('input[name="released"]')).toHaveLength(1);
      })
      it('Renderiza 3 input con la propiedad "name" igual a "platform"', () => {
        expect(wrapper.find('input[name="platform"]')).toHaveLength(3);
      })
      it('Renderiza un input con la propiedad "name" igual a "rating"', () => {
        expect(wrapper.find('input[name="rating"]')).toHaveLength(1);
      })
      it('Renderiza un boton de tipo submit"', () => {
        expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
      })
    });

});