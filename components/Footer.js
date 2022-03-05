import defaults from '../common/defaults'

const Footer = () => {
  return (
    <div className="flex flex-col py-2 pl-5 lg:pl-24 pr-5 text-xs text-gray-400 lg:justify-center">
      <div>
        You may use all contents of this website under the terms of the CC BY 4.0 license,
        attributing the work to condensation.io. Source code is available under MIT and Apache 2.0
        license.
      </div>
      <div>
        Contact us at
        <a className="mail" href={`mailto:${defaults.email}`}>
          {defaults.email}
        </a>
      </div>
    </div>
  )
}

export default Footer
