<script setup>
import { defineProps } from 'vue'
const props = defineProps(['icon', 'class'])
</script>

<template>
<svg :class="class" v-if="icon === 'arrow-left'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
</svg>

<svg :class="class" v-if="icon === 'loader'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></g></svg>

<svg :class="class" v-if="icon === 'pencil'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>

<svg v-if="icon === 'bold'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" :class="class" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M6 4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.5 4.5 0 0 1 13.5 20H6v-2h1V6H6V4zm3 7h3.5a2.5 2.5 0 0 0 0-5H9v5zm0 2v5h4.5a2.5 2.5 0 0 0 0-5H9z" fill="currentColor"/></g></svg>

<svg v-if="icon === 'italic'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" :class="class" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M13 20H7v-2h1.927l4.116-12H11V4h6v2h-1.927l-4.116 12H13v2z" fill="currentColor"/></g></svg>

<svg v-if="icon === 'strike'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" :class="class" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M12.25 19.26c-1.347 0-2.494-.307-3.44-.92a4.85 4.85 0 0 1-1.96-2.52l1.98-1.16c.56 1.573 1.72 2.36 3.48 2.36c.866 0 1.513-.167 1.94-.5c.44-.347.66-.793.66-1.34c0-.5-.178-.893-.532-1.18H4v-2h16v2h-2.928c.092.34.137.72.137 1.14c0 1.267-.46 2.273-1.38 3.02c-.906.733-2.1 1.1-3.58 1.1z" fill="currentColor"/><path d="M7.77 10.42c.1.208.224.401.37.58h4.714a53.725 53.725 0 0 0-.304-.1c-1.067-.333-1.807-.647-2.22-.94c-.4-.307-.6-.72-.6-1.24c0-.533.2-.953.6-1.26c.4-.32.933-.48 1.6-.48c1.373 0 2.353.653 2.94 1.96l1.94-1.12c-.454-.96-1.1-1.713-1.94-2.26c-.84-.547-1.82-.82-2.94-.82c-1.24 0-2.3.367-3.18 1.1c-.88.72-1.32 1.7-1.32 2.94c0 .627.113 1.173.34 1.64z" fill="currentColor"/></g></svg>

<svg v-if="icon === 'underline'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" :class="class" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M9 4H7v7a5 5 0 0 0 10 0V4h-2v7a3 3 0 1 1-6 0V4z" fill="currentColor"/><path d="M19 20v-2H5v2h14z" fill="currentColor"/></g></svg>

<svg v-if="icon === 'code'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" :class="class" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M8.01 18.02L2 12.01L8.01 6l1.415 1.414l-4.6 4.6l4.6 4.6l-1.414 1.406H8.01zm7.979 0l-1.413-1.413l4.6-4.6l-4.6-4.6L15.99 6L22 12.01l-6.01 6.01h-.001z" fill="currentColor"/></g></svg>

<svg v-if="icon === 'parapgraph'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" :class="class" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M6 9a5 5 0 0 1 5-5h7v2h-1v14h-2V6h-2v14h-2v-6a5 5 0 0 1-5-5zm5 3V6a3 3 0 0 0 0 6z" fill="currentColor"/></g></svg>

<svg v-if="icon === 'h1'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" :class="class" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M10 4v7H4V4H2v16h2v-7h6v7h2V4h-2z" fill="currentColor"/><path d="M20 20V8h-1.5l-2.5.67v2.07l2-.536V20h2z" fill="currentColor"/></g></svg>

<svg v-if="icon === 'h2'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" :class="class" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M10 4v7H4V4H2v16h2v-7h6v7h2V4h-2z" fill="currentColor"/><path d="M22 11.75C22 9.679 20.21 8 18 8s-4 1.679-4 3.75h2.133l.007-.144C16.218 10.707 17.02 10 18 10c1.03 0 1.867.784 1.867 1.75c0 .439-.173.841-.459 1.148L14 18.444V20h8v-2h-4.497l3.516-3.79l.158-.18A3.59 3.59 0 0 0 22 11.75z" fill="currentColor"/></g></svg>

<svg v-if="icon === 'h3'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" :class="class" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M10 4v7H4V4H2v16h2v-7h6v7h2V4h-2z" fill="currentColor"/><path d="M21.729 10l.002-2H14.5v2h4.378l-3.176 3.283l1.407 1.515c.256-.118.546-.186.854-.186c1.04 0 1.884.768 1.884 1.714c0 .947-.844 1.715-1.884 1.715c-.917 0-1.681-.597-1.849-1.386L14 17.029C14.36 18.722 15.998 20 17.963 20C20.193 20 22 18.355 22 16.326c0-1.691-1.256-3.117-2.968-3.543L21.73 10z" fill="currentColor"/></g></svg>

<svg v-if="icon === 'list-ul'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" :class="class" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M20 18H8v-2h12v2zM6 18H4v-2h2v2zm14-5H8v-2h12v2zM6 13H4v-2h2v2zm14-5H8.023V6H20v2zM6 8H4V6h2v2z" fill="currentColor"/></g></svg>

<svg v-if="icon === 'list-ol'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" :class="class" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M6.983 19H4v-1h1.989v-.5h-.994v-1h.995V16H4v-1h2.983v4zM21 18H9.069v-2H21v2zM6.983 14H4v-.9L5.79 11H4v-1h2.983v.9L5.193 13h1.79v1zM21 13H9.069v-2H21v2zM6.486 9h-.995V6H4.5V5h1.986v4zM21 8H9.069V6H21v2z" fill="currentColor"/></g></svg>

<svg v-if="icon === 'terminal'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" :class="class" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zM4 6v12h16V6H4zm14 10h-6v-2h6v2zM7.414 16L6 14.586l2.293-2.293L6 10l1.414-1.414l3.707 3.707L7.415 16h-.001z" fill="currentColor"/></g></svg>

<svg v-if="icon === 'blockquote'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" :class="class" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M7.627 11.379C6.06 11.379 5 10.287 5 8.669C5 7.213 6.216 6 7.863 6C9.667 6 11 7.456 11 9.68c0 5.055-3.686 7.077-6 7.32v-2.224c1.569-.283 3.333-1.86 3.412-3.6c-.079.04-.392.203-.785.203z" fill="currentColor"/><path d="M15.627 11.379c-1.568 0-2.627-1.092-2.627-2.71C13 7.213 14.216 6 15.863 6C17.667 6 19 7.456 19 9.68c0 5.055-3.686 7.077-6 7.32v-2.224c1.569-.283 3.333-1.86 3.412-3.6c-.079.04-.392.203-.785.203z" fill="currentColor"/></g></svg>

<svg v-if="icon === 'minus'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" :class="class" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M5 13v-2h14v2H5z" fill="currentColor"/></g></svg>

<svg v-if="icon === 'line-break'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" :class="class" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M18 6v6H7.83l2.58-2.59L9 8l-5 5l5 5l1.41-1.41L7.83 14H20V6h-2z" fill="currentColor"/></g></svg>

<svg v-if="icon === 'undo'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" :class="class" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M6 4h2v2.557a7 7 0 1 1-1.037 10.011l1.62-1.184A5 5 0 1 0 9.408 8H12v2H6V4z" fill="currentColor"/></g></svg>

<svg v-if="icon === 'redo'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" :class="class" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M18.001 4h-2v2.557a7 7 0 1 0 1.037 10.011l-1.62-1.184A5 5 0 1 1 14.593 8h-2.59v2h6V4z" fill="currentColor"/></g></svg>

<svg v-if="icon === 'plus'" xmlns="http://www.w3.org/2000/svg" :class="class" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
</template>