import { resolve } from 'path'
// import { iterateConnection } from './iterateConnection.js'

/**  The purpose of this function is to find & yield next nodes.
 * @yields {Object { node: <node instance>} } a traversal configuration feed/iterato
 **/
export async function* nestedNode({ forkEdge, getImplementation, additionalChildNode, graph }) {
  let portNode = forkEdge.destination
  let nodeIteratorFeed = await graph.traverserInstruction.nodeIterator.iterateNext({ targetNode: forkEdge.destination, additionalChildNode, graph })
  yield* nodeIteratorFeed
}
