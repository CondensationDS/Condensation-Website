import defaults from '../common/defaults'

const Footer = () => {
  return (
    <div className="flex flex-col py-8 px-8 sm:pl-28 text-xs text-gray-400 lg:justify-center">
      <div>
        You may use all contents of this website under the terms of the CC BY 4.0 license,
        attributing the work to condensation.io. Source code is available under MIT and Apache 2.0
        license. Contact us at
        <a className="mail ml-1" href={`mailto:${defaults.email}`}>
          {defaults.email}
        </a>
      </div>
    </div>
  )
}

export default Footer
