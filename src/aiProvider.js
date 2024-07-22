// src/aiProvider.js

import axios from 'axios';
import * as vscode from 'vscode';

export default class AIProvider {
  constructor() {
    this.updateConfig();
    vscode.workspace.onDidChangeConfiguration(() => this.updateConfig());
  }

  updateConfig() {
    const config = vscode.workspace.getConfiguration('claude-ai-assistant');
    this.apiUrl = config.get('apiUrl') || 'https://api.anthropic.com/v1/completions';
    this.apiKey = config.get('apiKey');
    this.model = config.get('model') || 'claude-2';
    this.usePaidModel = config.get('usePaidModel') || false;
    this.organizationId = config.get('organizationId');
  }

  async getSuggestion(context) {
    try {
      const headers = {
        'X-API-Key': this.apiKey,
        'Content-Type': 'application/json',
      };

      if (this.usePaidModel && this.organizationId) {
        headers['Anthropic-Organization'] = this.organizationId;
      }

      const { data } = await axios.post(
        this.apiUrl,
        {
          prompt: `Human: ${context}\n\nAssistant: Here's a suggestion to complete your code:`,
          model: this.model,
          max_tokens_to_sample: 100,
          stop_sequences: ['\n\nHuman:'],
        },
        { headers }
      );

      if (!data.completion) {
        throw new Error('No completion received from Claude AI');
      }

      return data.completion.trim();
    } catch (error) {
      console.error('Error calling Claude AI API:', error);
      throw new Error(`Failed to get AI suggestion: ${error.message}`);
    }
  }
}
