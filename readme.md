# Claude AI Assistant for VS Code

Claude AI Assistant is a Visual Studio Code extension that provides AI-powered code suggestions using Anthropic's Claude AI to enhance your coding experience.

## Features

- Claude AI-powered code completion
- On-demand code suggestions
- Customizable API integration with Claude
- Choice of Claude AI models, including free and paid options

## Requirements

- Visual Studio Code v1.75.0 or higher
- An API key for Claude AI (from Anthropic)
- For paid models: An Anthropic organization ID

## Installation

1. Download the `.vsix` file from the [latest release](https://github.com/aliumairdev/vscode-claude-ai-assistant).
2. Open VS Code and navigate to the Extensions view.
3. Click on the '...' menu in the top-right corner of the Extensions view.
4. Select 'Install from VSIX...' and choose the downloaded `.vsix` file.

## Configuration

Before using the extension, you need to configure your Claude AI API key and choose your preferred model:

1. Open VS Code settings (File > Preferences > Settings).
2. Search for "Claude AI Assistant" in the settings search bar.
3. Enter your Claude AI API key in the "Api Key" field.
4. Select your preferred Claude AI model from the "Model" dropdown. Options include:
   - Free models:
     - claude-2 (default)
     - claude-instant-1
     - claude-1
   - Paid models:
     - claude-2-100k
     - claude-2-200k
5. If you want to use a paid model:
   - Set "Use Paid Model" to true
   - Enter your Anthropic Organization ID in the "Organization Id" field
6. (Optional) If needed, update the "Api Url" field.

## Usage

### Getting Claude AI Suggestions

1. Place your cursor where you want a suggestion.
2. Open the Command Palette (Ctrl+Shift+P / Cmd+Shift+P).
3. Type "Get Claude AI Suggestion" and select the command.

### Inline Completion

As you type, the Claude AI Assistant will automatically offer inline suggestions.

## Extension Settings

This extension contributes the following settings:

- `claude-ai-assistant.apiKey`: API Key for the Claude AI service
- `claude-ai-assistant.apiUrl`: URL for the Claude AI API (default should work in most cases)
- `claude-ai-assistant.model`: Claude AI model to use for suggestions
- `claude-ai-assistant.usePaidModel`: Whether to use paid Claude AI models
- `claude-ai-assistant.organizationId`: Organization ID for paid Claude AI models

## Known Issues

- Claude AI's API is not publicly available as of the last update. This extension assumes a hypothetical public API and may need adjustments when the actual API is released.
- The available models and pricing may change as Anthropic updates their offerings.

## Contributing

We welcome contributions to the Claude AI Assistant extension! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to Anthropic for their powerful Claude AI models
- Inspired by GitHub Copilot and other AI coding assistants

## Contact

Aliumair - [@a_aliumair](https://twitter.com/a_aliumair) - aliumair.dev@gmail.com

Project Link: [https://github.com/aliumairdev/vscode-claude-ai-assistant](https://github.com/aliumairdev/vscode-claude-ai-assistant)
