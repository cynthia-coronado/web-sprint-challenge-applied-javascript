const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  //instantiating
  const header = document.createElement('div')
  const headerDate = document.createElement('span')
  const headerTitle = document.createElement('h1')
  const headerTemp = document.createElement('span')

  //creating classlist, attributes and text 
  header.classList.add('header')
  headerDate.classList.add('date')
  headerDate.textContent = date
  headerTitle.textContent = title
  headerTemp.classList.add('temp')
  headerTemp.textContent = temp

  //creating hierarchy
  header.appendChild(headerDate)
  header.appendChild(headerTitle)
  header.appendChild(headerTemp)

  return header
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerEntry = document.querySelector(selector)
  headerEntry.appendChild(Header('The Lambda Llama', 'June 21st, 2021', '95F'))
}

export { Header, headerAppender }
