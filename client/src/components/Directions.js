import React from 'react';
// import Client from './Client';

const Directions = React.createClass({
  getInitialState: function () {
    return {
    };
  },
  render: function () {
    return (
      <div className='ui text container'>
        <h1>Directions</h1>
        Suspendisse auctor semper elementum. In malesuada iaculis consequat. Cras ac justo at ipsum ornare lacinia. In vitae libero tincidunt urna aliquet mattis vel a ante. Quisque efficitur nulla nunc, sit amet semper nisi dictum egestas. Praesent blandit sodales augue id convallis. Donec lectus mi, varius sed faucibus eu, laoreet at ex. Etiam vulputate, mauris id iaculis blandit, nulla mauris sodales metus, et maximus erat sapien sit amet purus. Fusce congue gravida ultricies. Sed lacinia enim consectetur augue dictum consequat.

        Donec at interdum nisi, eu lacinia dui. Donec lorem tortor, tincidunt lacinia porta et, convallis eget arcu. Nam sit amet interdum justo. Morbi id iaculis nibh. Proin efficitur odio sem, nec sollicitudin ipsum faucibus non. Vivamus et viverra nisi, a ornare dui. Pellentesque accumsan tellus at egestas condimentum. Vestibulum sed ornare mauris. Curabitur maximus, ante sit amet sagittis tincidunt, mauris urna feugiat nisl, vitae lacinia mauris augue et arcu. Pellentesque sit amet sem mauris. Nullam mattis, magna sit amet dictum auctor, nisl lorem volutpat ligula, ut pretium tellus enim vitae quam. Ut leo velit, commodo et felis in, pretium tincidunt odio. Proin imperdiet lectus non nisi viverra ultrices.
        <div class="ui four column doubling stackable grid container">
          <div class="column">
            <p>one</p>
            <p></p>
          </div>
          <div class="column">
            <p></p>
            <p></p>
          </div>
          <div class="column">
            <p></p>
            <p></p>
          </div>
          <div class="column">
            <p></p>
            <p></p>
          </div>
        </div>
        <div class="ui card">
          <div class="image">
            <img src="/img/kristy.png"  alt='kristy' />
          </div>
          <div class="content">
            <a class="header">Kristy</a>
            <div class="meta">
              <span class="date">Joined in 2013</span>
            </div>
            <div class="description">
              Kristy is an art director living in New York.
            </div>
          </div>
          <div class="extra content">
            <a>
              <i class="user icon"></i>
              22 Friends
            </a>
          </div>
        </div>
      </div>
    );
  },
});

export default Directions;
