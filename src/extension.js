import * as vscode from 'vscode';
import AIProvider from './aiProvider.js';
import SuggestionProvider from './suggestionProvider.js';

export function activate(context) {
  console.log('AI Assistant is now active!');

  const aiProvider = new AIProvider();
  const suggestionProvider = new SuggestionProvider(aiProvider);

  let disposable = vscode.commands.registerCommand('ai-assistant.getSuggestion', async () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const { document, selection } = editor;
      const text = document.getText(selection);

      try {
        const suggestion = await aiProvider.getSuggestion(text);
        editor.edit((editBuilder) => {
          editBuilder.replace(selection, suggestion);
        });
      } catch (error) {
        vscode.window.showErrorMessage('Failed to get AI suggestion');
      }
    }
  });

  context.subscriptions.push(disposable);

  // Register the suggestion provider
  const provider = vscode.languages.registerInlineCompletionItemProvider(
    { scheme: 'file', language: '*' },
    suggestionProvider
  );

  context.subscriptions.push(provider);
}

export function deactivate() {}
