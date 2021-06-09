import Component from '../core/Component/Component.js'

function Loader() {
  return `
            <div class="loader-container">
                <div class="loader" title="2">
                <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                <path fill="red" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                    <animateTransform attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 25 25"
                    to="360 25 25"
                    dur="0.6s"
                    repeatCount="indefinite"/>
                    </path>
                </svg>
                </div>
            </div>    
    `
}

export default class Loading extends Component {
  constructor(target, store) {
    super(target, { store })
  }

  template() {
    const { loading } = this.$props.store.getState()

    if (loading) {
      return Loader()
    }

    return `<span></span>`
  }
}