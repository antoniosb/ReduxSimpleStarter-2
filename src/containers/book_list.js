import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          className='list-group-item'>{book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className='list-group col-sm4'>
        { this.renderList() }
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

// anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispacth) {
  // whenever selectBook (actioncreator) is called, the result shuold be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispacth)
}
// promote BookList from a component to a container. It needs to know about this new
// dispatch method. make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
