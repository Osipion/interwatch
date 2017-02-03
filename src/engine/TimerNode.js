/**
 * Created by tom on 03/02/17.
 * @flow
 */

export default class TimerNode {

  static timerType = "timer";
  static setType   = "set";
  static typeRegExp = new RegExp(`^(${TimerNode.setType}|${TimerNode.timerType})$`);

  constructor({id = '', repetitions = 1, type = ''} = {}) {
    if(!type.match(TimerNode.typeRegExp)) {
      throw new Error(`Type of timer node must be one of '${TimerNode.timerType}' or '${TimerNode.setType}'`);
    }
    if(!id) {
      throw new Error('Timer nodes must have ids');
    }
    this.id = id;
    this.repetitions = repetitions;
    this.type = type;
  }

  toTimeLine() {
    let flattenTree = (node, parentName) => {
      parentName = parentName ? parentName + "." : '';
      if (node.type === TimerNode.timerType) {
        return Array.apply(null, Array(node.repetitions)).map(_ => {
          return {name: parentName + node.id, duration: node.duration}
        })
      }
      return node.children.reduce((a, v) => a.concat(flattenTree(v, parentName + node.id)), []);
    };
    return flattenTree(this, '');
  }

}