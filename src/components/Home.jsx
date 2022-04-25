export const Home = () => {
    return (
        <>
          <h3 className="welcome">Welcome To employee management system</h3>
          <div className="home">
            <span>Stats</span>
            <div>
              Total Employees<span className="totalemp">0</span>
            </div>
            <div>
              Total Terminated: <span className="total_terminated">0</span>
            </div>
            <div>
              Total Promoted: <span className="total_promoted">0</span>
            </div>
            <div>
              Total New: <span className="total_new">0</span>
            </div>
          </div>
        </>
      );
}