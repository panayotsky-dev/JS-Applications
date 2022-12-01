import { html } from '../../node_modules/lit-html/lit-html.js'

import * as albumService from '../services/albumService.js'

import { albumTemplate } from './templates/albumTemplates.js';



const catalogTemplate = (albums,user) => html`
<section id="catalogPage">
            <h1>All Albums</h1>
            ${albums.map(x=>albumTemplate(x,Boolean(user)))}

            ${albums.length == 0
            ? html`<p class="no-albums">No albums in database.</p>`
            : ''            }
            

        </section>
`;

export const catalogView = (ctx) =>{
    albumService.getAll()
    .then(albums =>{
        ctx.render(catalogTemplate(albums,ctx.user))
    })
} 