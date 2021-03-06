import type TWClassesSorter from 'tailwind-classes-sorter'
import html from './html'
import css from './css'
import babel from './babel'
import typescript from './typescript'

export default (twClassesSorter: TWClassesSorter) => ({
	html: html(twClassesSorter),
	css: css(twClassesSorter),
	babel: babel(twClassesSorter),
	typescript: typescript(twClassesSorter),
})
