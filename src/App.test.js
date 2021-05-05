import * as React from 'react';
//import { screen } from '@testing-library/react';
import { shallow, mount, render } from "enzyme";
import App from './App';
import PieChart from './components/PieChart';


describe("<App /> component", () => {
    it('If it contains the right h1 and text', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find("h1").text()).toEqual("Pie Chart");
    });
    
    it("If it contains canva", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find("canva")).toBeTruthy();
    });

    it('If <App /> contains <PieChart /> component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(PieChart)).toBeTruthy();
    });

    it('renders <PieChart /> component once', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(PieChart).length).toBe(1);
    });
});


describe("testing for Pie Chart", () => {

  // it('Renders a Pie chart', () => {
  //   const wrapper = mount(
  //     <PieChart />,
  //   )
  //   expect(wrapper).toMatchSnapshot()
  // });


  it('test for all attributes and values', () => {
    const wrapper = mount(<PieChart
      type="pie"
      options={{ maintainAspectRatio: false, responsive: true }}
      data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      }}
      />
    );


    expect(wrapper.props().type).toEqual('pie');
    expect(wrapper.props().options).toEqual({ 'maintainAspectRatio': false, 'responsive': true });
    expect(wrapper.props().data.labels).toEqual(['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']);
    expect(wrapper.props().data.datasets[0].label).toEqual('# of Votes');
    expect(wrapper.props().data.datasets[0].data).toEqual([12, 19, 3, 5, 2, 3]);
    expect(wrapper.props().data.datasets[0].backgroundColor).toEqual([
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
  ]);
    expect(wrapper.props().data.datasets[0].borderColor).toEqual([
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ]);
    expect(wrapper.props().data.datasets[0].borderColor).toEqual([
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ]);
    expect(wrapper.props().data.datasets[0].borderWidth).toEqual(1);
    wrapper.unmount();

  });
});
