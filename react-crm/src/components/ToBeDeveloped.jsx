const ToBeDeveloped = () => {
  return (
    <div 
      className="to-be-developed" 
      style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}} 
    >
      <div>
        <h1>敬请期待</h1>
        <p>此功能目前正在开发中...</p>
      </div>
      <div style={{height: '300px', width: '300px'}}>
        <img src="src/assets/navigation-82.svg" alt="" style={{maxHeight: '300px'}} />
      </div>
    </div>
  );
};
export default ToBeDeveloped;