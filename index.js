export default function(babel) {
  const { types: t } = babel

  return {
    visitor: {
      TypeCastExpression: function(path) {
        path.node.expression.name = ''
        var hijo = path.node.typeAnnotation
        var nieto = path.node.typeAnnotation.typeAnnotation
        path.node.typeAnnotation = path.node.typeAnnotation.typeAnnotation
      }
    }
  }
}
