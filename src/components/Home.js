const Home = () => {

    return (
        <div 
            // style={{
            //     backgroundImage: `url("https://miro.medium.com/max/8420/1*Jq9zkjx65HKizHjXSas51g.png")`,
            //     backgroundRepeat: 'no-repeat',
            //     backgroundPosition: 'cover',
                
            
            // }}>

          style={{
          backgroundImage: "url(" + "https://media.istockphoto.com/photos/the-silhouette-of-a-farmer-stands-near-a-cow-milk-cans-in-the-picture-id1301384827?b=1&k=20&m=1301384827&s=170667a&w=0&h=FYOAq55S21fIWd1FZT_AS7WdbkDYIpWUGcGThhnVL0I=" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat'
           }}>

            <div className="container"
                style={{ height: "100vh",
                color:"white"
            }}
            >
                <h1 className="display-4 text-primary  pt-5">Welcome to Dairy Management</h1>
                <p>Dairy Management Online</p>
            </div>

            {/* <div >
                <img width="100%" src="https://miro.medium.com/max/8420/1*Jq9zkjx65HKizHjXSas51g.png" alt="development"></img>
                <img width="100%" src="https://www.contentgrip.com/content/images/wordpress/2021/03/capgemini-FI-1.jpg" alt="Capgemini Office"></img>
            </div> */}

        </div>

    );
}

export default Home;