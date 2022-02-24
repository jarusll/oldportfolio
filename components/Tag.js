const Tag = ({children, className, ...props}) => <span {...props} className={"bg-slate-600 p-2 text-white rounded " + className}>{children}</span>
export default Tag