import React from 'react';

class Category extends React.Component {
  render() {
    return (
      <div className="category">
        <span style={{backgroundColor: this.props.colorTheme}}><strong>{this.props.category}</strong></span>
      </div>
    )
  }
};

export default Category;
