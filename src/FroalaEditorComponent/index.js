import React from 'react'
import PropTypes from 'prop-types'

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css'
import 'froala-editor/css/froala_editor.pkgd.min.css'

// Require Editor JS files.
import 'froala-editor/js/plugins.pkgd.min.js'

import Froalaeditor from 'froala-editor'
import FroalaEditor from 'react-froala-wysiwyg'

FroalaEditorComponent.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

FroalaEditorComponent.defaltProps = {
  value: '',
  onChange: () => null,
}

function FroalaEditorComponent(props) {
  const { value, onChange } = props

  const changeDirection = function (dir, align) {
    // Wrap block tags.
    this.selection.save()
    this.html.wrap(true, true, true, true)
    this.selection.restore()

    // Get blocks.
    var elements = this.selection.blocks()

    // Save selection to restore it later.
    this.selection.save()

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i]
      if (element != this.el) {
        this.$(element)
          .css('direction', dir)
          .css('text-align', align)
          .removeClass('fr-temp-div')
      }
    }

    // Unwrap temp divs.
    this.html.unwrap()

    // Restore selection.
    this.selection.restore()
  }

  Froalaeditor.DefineIcon('rightToLeftIcon', {
    NAME: 'rightToLeft',
    PATH:
      'M 17.296875 8.296875 L 2.40625 8.296875 L 4.871094 5.84375 C 5.148438 5.566406 5.148438 5.121094 4.875 4.847656 C 4.601562 4.574219 4.15625 4.570312 3.878906 4.84375 L 0.207031 8.5 C 0.207031 8.5 0.207031 8.503906 0.207031 8.503906 C -0.0664062 8.777344 -0.0703125 9.222656 0.207031 9.496094 C 0.207031 9.496094 0.207031 9.5 0.207031 9.5 L 3.878906 13.15625 C 4.15625 13.429688 4.601562 13.425781 4.875 13.152344 C 5.148438 12.878906 5.148438 12.433594 4.871094 12.15625 L 2.40625 9.703125 L 17.296875 9.703125 C 17.683594 9.703125 18 9.386719 18 9 C 18 8.613281 17.683594 8.296875 17.296875 8.296875 Z M 17.296875 8.296875',
  })
  Froalaeditor.RegisterCommand('rightToLeftButton', {
    title: 'Right to Left',
    icon: 'rightToLeftIcon',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: function () {
      changeDirection.apply(this, ['rtl', 'right'])
    },
  })

  Froalaeditor.DefineIcon('leftToRightIcon', {
    NAME: 'leftToRight',
    PATH:
      'M 17.792969 8.503906 C 17.792969 8.503906 17.792969 8.5 17.792969 8.5 L 14.121094 4.84375 C 13.84375 4.570312 13.398438 4.574219 13.125 4.847656 C 12.851562 5.121094 12.851562 5.566406 13.128906 5.84375 L 15.59375 8.296875 L 0.703125 8.296875 C 0.316406 8.296875 0 8.613281 0 9 C 0 9.386719 0.316406 9.703125 0.703125 9.703125 L 15.59375 9.703125 L 13.128906 12.15625 C 12.851562 12.433594 12.851562 12.878906 13.125 13.152344 C 13.398438 13.425781 13.84375 13.429688 14.121094 13.15625 L 17.792969 9.5 C 17.792969 9.5 17.792969 9.496094 17.792969 9.496094 C 18.070312 9.222656 18.066406 8.777344 17.792969 8.503906 Z M 17.792969 8.503906 ',
  })
  Froalaeditor.RegisterCommand('leftToRightButton', {
    title: 'Left to Right',
    icon: 'leftToRightIcon',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: function () {
      changeDirection.apply(this, ['ltr', 'left'])
    },
  })

  return (
    <FroalaEditor
      tag="textarea"
      config={{
        placeholder: '',
        key: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        attribution: false,
        imageUploadRemoteUrls: false,
        charCounterMax: 32768,
        heightMin: 250,
        heightMax: 500,
        htmlUntouched: true,
        htmlDoNotWrapTags: ['script', 'style', 'video'],
        quickInsertTags: [''],
        toolbarButtons: [
          'fullscreen',
          'bold',
          'italic',
          'underline',
          // 'strikeThrough',
          // 'subscript',
          // 'superscript',
          'fontFamily',
          'fontSize',
          'color',
          // 'inlineStyle',
          // 'paragraphStyle',
          'paragraphFormat',
          '|',
          'align',
          'formatOL',
          'formatUL',
          'outdent',
          'indent',
          // 'quote',
          '|',
          'insertLink',
          'insertImage',
          'insertVideo',
          'insertFile',
          'insertTable',
          '|',
          'emoticons',
          'specialCharacters',
          'insertHR',
          'selectAll',
          'clearFormatting',
          'print',
          'help',
          'html',
          '|',
          'leftToRightButton',
          'rightToLeftButton',
          '|',
          'undo',
          'redo',
        ],
        toolbarButtonsXS: {
          moreText: {
            buttons: [
              'bold',
              'italic',
              'underline',
              'fontFamily',
              'fontSize',
              'color',
              'paragraphFormat',
            ],
            buttonsVisible: 0,
          },
          moreParagraph: {
            buttons: ['align', 'formatOL', 'formatUL', 'outdent', 'indent'],
            buttonsVisible: 0,
          },
          moreRich: {
            buttons: [
              'insertLink',
              'insertImage',
              'insertVideo',
              'insertFile',
              'insertTable',
              'emoticons',
              'specialCharacters',
              'insertHR',
              'selectAll',
              'clearFormatting',
            ],
            buttonsVisible: 0,
          },
          moreMisc: {
            buttons: [
              'fullscreen',
              'print',
              'help',
              'html',
              'leftToRightButton',
              'rightToLeftButton',
              'undo',
              'redo',
            ],
            align: 'right',
            buttonsVisible: 0,
          },
        },
        paragraphFormat: {
          N: 'Paragraph',
          H1: 'Heading 1',
          H2: 'Heading 2',
          H3: 'Heading 3',
          H4: 'Heading 4',
          H5: 'Heading 5',
          H6: 'Heading 6',
          PRE: 'Code',
        },
        linkInsertButtons: ['linkBack'],
        linkEditButtons: ['linkEdit', 'linkRemove'],
        imageInsertButtons: ['imageByURL'],
        videoInsertButtons: ['videoByURL', 'videoEmbed'],
      }}
      model={value}
      onModelChange={onChange}
    />
  )
}

export default FroalaEditorComponent
