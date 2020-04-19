import prayer from './models/prayer'

const modelNameToActions = {
	prayer
}

export type availableModelsWithActions = keyof typeof modelNameToActions

export default (modelName: availableModelsWithActions) =>
	modelNameToActions[modelName]
