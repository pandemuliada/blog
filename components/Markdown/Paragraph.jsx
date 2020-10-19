const Paragraph = (props) => {
  return (
    <p {...props} className="text-gray mb-4">
      {props.children}
    </p>
  )
}

export default Paragraph
