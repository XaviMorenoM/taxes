import payer from './models/payer'

const modelNameToActions = {
  payer
}

export type availableModelsWithActions = keyof typeof modelNameToActions

export default (modelName: availableModelsWithActions) =>
  modelNameToActions[modelName]
