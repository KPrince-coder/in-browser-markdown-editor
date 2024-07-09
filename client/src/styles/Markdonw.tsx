import styled from "styled-components";

const Markdown = styled.div`
   
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  nav,
  section,
  summary {
    display: block;
  }

  audio,
  canvas,
  video {
    display: inline-block;
    display: inline;
    zoom: 1;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  [hidden] {
    display: none;
  }

  html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  html,
  button,
  input,
  select,
  textarea {
    font-family: sans-serif;
  }

  body {
    margin: 0;
  }

  a:focus {
    outline: thin dotted;
  }

  a:hover,
  a:active {
    outline: 0;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  h2 {
    font-size: 1.5em;
    margin: 0.83em 0;
  }

  h3 {
    font-size: 1.17em;
    margin: 1em 0;
  }

  h4 {
    font-size: 1em;
    margin: 1.33em 0;
  }

  h5 {
    font-size: 0.83em;
    margin: 1.67em 0;
  }

  h6 {
    font-size: 0.75em;
    margin: 2.33em 0;
  }

  abbr[title] {
    border-bottom: 1px dotted;
  }

  b,
  strong {
    font-weight: bold;
  }

  blockquote {
    margin: 1em 40px;
  }

  dfn {
    font-style: italic;
  }

  mark {
    background: var(--color-yellow);
    color: var(--color-grey-900);
  }

  p,
  pre {
    margin: 1em 0;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: "courier new", monospace;
    font-size: 1em;
    white-space: pre-wrap;
  }

  pre {
    padding: 0.5rem 2rem;
    font-size: 0.95rem;
    background: var(--color-grey-700);
    color: var(--color-grey-0);
    border-radius: 10px;
    white-space: pre;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  q {
    quotes: none;
  }

  q:before,
  q:after {
    content: "";
    content: none;
  }

  small {
    font-size: 75%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }

  dl,
  menu,
  ol,
  ul {
    margin: 1em 0;
  }

  dt {
    font-weight: 600;
  }

  dd {
    margin: 0 0 0 40px;
  }

  menu,
  ol,
  ul {
    padding: 0 0 0 40px;
  }

  nav ul,
  nav ol {
    list-style: none;
    list-style-image: none;
  }

  li p:first-child {
    margin: 0;
  }

  img {
    border: 0;
    -ms-interpolation-mode: bicubic;
    max-width: 100%;
    height: auto;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  figure {
    margin: 0;
  }

  form {
    margin: 0;
  }

  fieldset {
    border: 1px solid var(--color-grey-300);
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }

  legend {
    border: 0;
    padding: 0;
    white-space: normal;
    *margin-left: -7px;
  }

  button,
  input,
  select,
  textarea {
    font-size: 100%;
    margin: 0;
    vertical-align: baseline;
    *vertical-align: middle;
  }

  button,
  input {
    line-height: normal;
  }

  button,
  input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    cursor: pointer;
    -webkit-appearance: button;
    *overflow: visible;
  }

  button[disabled],
  input[disabled] {
    cursor: default;
  }

  input[type="checkbox"],
  input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
    *height: 13px;
    *width: 13px;
  }

  input[type="search"] {
    -webkit-appearance: textfield;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  textarea {
    overflow: auto;
    vertical-align: top;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    background: var(--color-grey-600);
    color: var(--color-grey-0);
    font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 170%;
    text-align: left;
    padding: 20px;
  }

  table {
    margin-bottom: 2em;
    padding: 0;
    font-size: 14px;
    min-width: 70%;
    margin: 0 0 2em 2rem;
    border: 1px solid var(--color-grey-400);
    border-collapse: separate;
    *border-collapse: collapse;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }

  table caption,
  table col,
  table colgroup,
  table table,
  table tbody,
  table td,
  table tfoot,
  table th,
  table thead,
  table tr {
    border-spacing: 0;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 24px;
  }

  table caption {
    display: table-caption;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    font-family: Helvetica;
    background: var(--color-grey-700);
    color: var(--colo-grey-0);
    padding: 8px 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    margin: 4px 0;
  }

  table col {
    display: table-column;
  }

  table colgroup {
    display: table-column-group;
  }

  table tbody {
    display: table-row-group;
  }

  table tfoot {
    display: table-footer-group;
  }

  table th,
  table td {
    padding: 10px 10px 9px;
    line-height: 18px;
    text-align: left;
  }

  table th {
    padding-top: 9px;
    font-family: Helvetica;
    font-size: 14px;
    font-weight: 700 !important;
    text-transform: uppercase;
    vertical-align: middle;
    text-align: center;
  }

  table td {
    vertical-align: top;
    border-top: 1px solid var(--color-grey-300);
    font-family: Helvetica serif;
    font-size: 14px !important;
  }

  table tbody th {
    border-top: 1px solid var(--color-grey-300);
    vertical-align: top;
  }

  table th + th,
  table td + td,
  table th + td {
    border-left: 1px solid var(--color-grey-300);
  }

  table thead tr:first-child th:first-child,
  table tbody tr:first-child td:first-child {
    -webkit-border-radius: 4px 0 0 0;
    -moz-border-radius: 4px 0 0 0;
    border-radius: 4px 0 0 0;
  }

  table thead tr:first-child th:last-child {
    -webkit-border-radius: 0 4px 0 0;
    -moz-border-radius: 0 4px 0 0;
    border-radius: 0 4px 0 0;
  }

  table tr:nth-child(odd),
  table th:nth-child(odd),
  table td:nth-child(odd) {
    background: var(--color-grey-600);
  }

  table tr:nth-child(even),
  table td:nth-child(even) {
    background: var(--color-grey-400);
  }

  table tbody tr:first-child td:last-child {
    -webkit-border-radius: 0 4px 0 0;
    -moz-border-radius: 0 4px 0 0;
    border-radius: 0 4px 0 0;
  }

  table tbody tr:last-child td:first-child {
    -webkit-border-radius: 0 0 0 4px;
    -moz-border-radius: 0 0 0 4px;
    border-radius: 0 0 0 4px;
  }

  table tbody tr:last-child td:last-child {
    -webkit-border-radius: 0 0 4px 0;
    -moz-border-radius: 0 0 4px 0;
    border-radius: 0 0 4px 0;
  }

  table tbody tr:nth-child(odd) {
    background-color: var(--color-grey-500);
  }

  figure {
    display: inline-block;
    position: relative;
    margin: 1em auto 2em 2rem;
    width: auto;
  }

  figcaption {
    font-style: italic;
    text-align: center;
    background: var(--color-grey-700);
    color: var(--color-grey-0);
    position: absolute;
    left: 0;
    bottom: -24px;
    width: 98%;
    padding: 1%;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  ul {
    list-style: circle;
  }

  ul ul,
  ol ol,
  ul ol,
  ol ul {
    margin: 0;
  }

  a:link,
  a:visited {
    text-decoration: none;
    border-bottom: 1px solid;
    color: rgba(31, 159, 194, 1);
  }

  a:hover,
  a:active {
    color: rgba(91, 219, 255, 1);
  }

 
  del {
    background: #fae6e6;
  }

  ins {
    background: #ecfce6;
  }

  span.critic.comment {
    color: #0000bb;
  }

  span.critic.comment::before {
    content: "{>> ";
  }

  span.critic.comment::after {
    content: " <<}";
  }
`;

export default Markdown;
