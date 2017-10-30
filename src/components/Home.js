import React, { Component } from 'react';
import profile_photo from '../images/profile_photo.jpeg'

class Home extends Component {
  render() {
    return (
      <div className='Home'>     
        <p>
          When I ran bookstores, I always imagined myself living in a book. I just didn't realize that book would be Cracking the Coding Interview. My life as a web developer started with mastering Excel and Mediawiki for enhancing all my tabletop games; now I spend my time building apps to find me more books and lobbying Spotify to bring back artist location info in their API. I still love pivot tables. 
        </p>

        <p>
          When I'm not coding, you can find me touring Seattle's dog parks or concert venues. I'll be the one on the front row. 
        </p>
      </div>
    );
  };
};

export default Home;
