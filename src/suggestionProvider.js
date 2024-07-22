import * as vscode from 'vscode';

export default class SuggestionProvider {
  constructor(aiProvider) {
    this.aiProvider = aiProvider;
  }

  async provideInlineCompletionItems(document, position, context, token) {
    const linePrefix = document.lineAt(position).text.substr(0, position.character);
    const docContent = document.getText();

    try {
      const suggestion = await this.aiProvider.getSuggestion(docContent);
      return [
        {
          insertText: suggestion,
          range: new vscode.Range(position, position),
        },
      ];
    } catch (error) {
      console.error('Error getting suggestion:', error);
      return [];
    }
  }
}
