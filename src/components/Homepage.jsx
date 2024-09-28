const HomePage = () =>{
  return (
    <div className="home container">
    <div className="home-a">
        <h1> YOUR FEET DESERVE THE BEST</h1>
        <p>Your feet, often overlooked and taken for granted, truly deserve the best care and attention. They bear the weight of your entire body, tirelessly supporting you day in and day out. Just think about the countless steps they take, the miles they travel, and the activities they engage in.</p>

        <div className="home-button">
            <button href="">Shope Now</button>
            <button herf="" className="button-2">Category</button>
        </div>

        <div className="home-icons">
            <p>Also Available On</p>
            <img src="/images/draz.png" alt="draz" />
            <img className="img-2" src="/images/alibaba.png" alt="draz" />
        </div>

    </div>

    <div className="home-b">
        <img src="/images/Home.png" alt="home-image" />
    </div>
    </div>

  )
}

export default HomePage;
