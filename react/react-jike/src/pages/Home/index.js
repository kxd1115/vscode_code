import BarChart from "./components/BarChart";

const Home = () => {
  return (
    <div>
      <BarChart title={'三大框架满意度'} xAxis={['Vue', 'React', 'Angular']}></BarChart>
      <BarChart title={'三大框架使用度'} xAxis={['Vue', 'React', 'Angular']}></BarChart>
    </div>
  )
};

export default Home;