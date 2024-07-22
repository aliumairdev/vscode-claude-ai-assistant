import axios from 'axios';
import * as vscode from 'vscode';

export default class AIProvider {
  constructor() {
    const config = vscode.workspace.getConfiguration('ai-assistant');
    this.apiUrl = config.get('apiUrl');
    this.apiKey = config.get('apiKey');
  }

  async getSuggestion(context) {
    try {
      const { data } = await axios.post(
        this.apiUrl,
        {
          prompt: context,
          max_tokens: 100,
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return data.choices[0].text;
    } catch (error) {
      console.error('Error calling AI API:', error);
      throw error;
    }
  }
}
