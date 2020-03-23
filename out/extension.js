'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function activate(context) {
    let disposable;
    disposable = vscode.commands.registerCommand('extension.kundokuRe', function () {
        insertText('㆑');
    });
    disposable = vscode.commands.registerCommand('extension.kundoku1', function () {
        insertText('㆒');
    });
    disposable = vscode.commands.registerCommand('extension.kundoku2', function () {
        insertText('㆓');
    });
    disposable = vscode.commands.registerCommand('extension.kundoku3', function () {
        insertText('㆔');
    });
    disposable = vscode.commands.registerCommand('extension.kundoku4', function () {
        insertText('㆕');
    });
    disposable = vscode.commands.registerCommand('extension.kundokuJou', function () {
        insertText('㆖');
    });
    disposable = vscode.commands.registerCommand('extension.kundokuChu', function () {
        insertText('㆗');
    });
    disposable = vscode.commands.registerCommand('extension.kundokuGe', function () {
        insertText('㆘');
    });
    disposable = vscode.commands.registerCommand('extension.kundokuKou', function () {
        insertText('㆙');
    });
    disposable = vscode.commands.registerCommand('extension.kundokuOtsu', function () {
        insertText('㆚');
    });
    disposable = vscode.commands.registerCommand('extension.kundokuHei', function () {
        insertText('㆛');
    });
    disposable = vscode.commands.registerCommand('extension.kundokuTei', function () {
        insertText('㆜');
    });
    disposable = vscode.commands.registerCommand('extension.kundokuTen', function () {
        insertText('㆝');
    });
    disposable = vscode.commands.registerCommand('extension.kundokuChi', function () {
        insertText('㆞');
    });
    disposable = vscode.commands.registerCommand('extension.kundokuJin', function () {
        insertText('㆟');
    });
    disposable = vscode.commands.registerCommand('extension.kundokuTateten', function () {
        insertText('㆐');
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function insertText(text) {
    let editor = vscode.window.activeTextEditor;
    if (editor) {
        let selection = editor.selection;
        editor.edit(editBuilder => {
            editBuilder.insert(selection.start, text);
        });
    }
}
//# sourceMappingURL=extension.js.map