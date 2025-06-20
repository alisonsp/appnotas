import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"567d149f-22b7-40d9-9421-5f8ebde831e0","homePageId":"989810b4-6ec5-417b-9a54-c1a4e28ef470","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":null,"defaultTheme":"light","langs":[{"lang":"pt","default":true}],"background":{},"workflows":[],"pages":[{"id":"0a352d8e-2369-4baa-9006-a7c4233a9ae4","linkId":"0a352d8e-2369-4baa-9006-a7c4233a9ae4","name":"Painel","folder":null,"paths":{"pt":"painel","default":"painel"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"8f655462-a810-43c5-950f-8a6200acfdd8","sectionTitle":"Container","linkId":"ed455917-985d-4533-ad46-d7cc2e2a1818"},{"uid":"f69dd8ef-b6e8-426b-b7b8-997cb26b31db","sectionTitle":"Sidemenu","linkId":"5f884db2-a36d-4468-98f7-6a940f06731c"}],"pageUserGroups":[{},{"userGroup":{"id":"b2e2c012-8930-497f-8b79-c22068d9099f","roles":[{"value":"af5288f0-e7f3-47c7-ab8d-ca4f18551968"}]}}],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"f40f66fe-7502-4d51-8a94-f60881d49571","linkId":"f40f66fe-7502-4d51-8a94-f60881d49571","name":"Notas","folder":null,"paths":{"pt":"notas","default":"notas"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"d9f5c237-0a2b-44c9-b027-78f6be35d922","sectionTitle":"Container","linkId":"243b8506-b45a-45ae-be1b-d184b8a4823a"},{"uid":"f69dd8ef-b6e8-426b-b7b8-997cb26b31db","sectionTitle":"Sidemenu","linkId":"5f884db2-a36d-4468-98f7-6a940f06731c"}],"pageUserGroups":[{},{"userGroup":{"id":"b2e2c012-8930-497f-8b79-c22068d9099f","roles":[{"value":"af5288f0-e7f3-47c7-ab8d-ca4f18551968"}]}}],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"c79b09fe-e83b-4c3b-b6df-1145e62d8b24","linkId":"c79b09fe-e83b-4c3b-b6df-1145e62d8b24","name":"Alunos","folder":null,"paths":{"pt":"alunos","default":"alunos"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"6db79d9c-8058-4b22-b9de-d159f53b3c70","sectionTitle":"Container","linkId":"2a200d34-59ed-4720-a261-f05da945fc16"},{"uid":"f69dd8ef-b6e8-426b-b7b8-997cb26b31db","sectionTitle":"Sidemenu","linkId":"5f884db2-a36d-4468-98f7-6a940f06731c"}],"pageUserGroups":[{},{"userGroup":{"id":"b2e2c012-8930-497f-8b79-c22068d9099f","roles":[{"value":"af5288f0-e7f3-47c7-ab8d-ca4f18551968"}]}}],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"b6587b52-80b4-434f-ad20-799b85464e0c","linkId":"b6587b52-80b4-434f-ad20-799b85464e0c","name":"Materia","folder":null,"paths":{"pt":"materia","default":"materia"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"82d10a67-68df-4c13-97cd-361b5006ff2e","sectionTitle":"Container","linkId":"b748fc07-e6ca-4518-b481-f48e26cd8c2a"},{"uid":"f69dd8ef-b6e8-426b-b7b8-997cb26b31db","sectionTitle":"Sidemenu","linkId":"5f884db2-a36d-4468-98f7-6a940f06731c"}],"pageUserGroups":[{},{"userGroup":{"id":"b2e2c012-8930-497f-8b79-c22068d9099f","roles":[{"value":"af5288f0-e7f3-47c7-ab8d-ca4f18551968"}]}}],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"c809d730-2693-4c17-887c-ae360c2c7d13","linkId":"c809d730-2693-4c17-887c-ae360c2c7d13","name":"Check","folder":"Login/","paths":{"pt":"check","default":"check"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"61d6f70d-4721-4c89-b345-d3c46f0a6553","sectionTitle":"Login Container","linkId":"11deb6d8-4b3f-4d1d-905d-a8c0bd9844cb"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"ba165b17-7dcc-4554-b421-1fa6d12dfd5c","linkId":"ba165b17-7dcc-4554-b421-1fa6d12dfd5c","name":"Esqueci senha","folder":"Login/","paths":{"pt":"esqueci-senha","default":"esqueci-senha"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"4ec4dbbd-7f50-4f51-9322-43adfd5b790f","sectionTitle":"Alert","linkId":"c0d61dcc-5b87-49e4-b6ac-ce692781ba81"},{"uid":"7f4337d2-ff16-4495-8008-3c22dad8d85e","sectionTitle":"Login Container","linkId":"af289818-a208-4ee8-9166-9de6eb0e4f59"}],"pageUserGroups":[],"title":{"pt":"AppNotas - Login"},"meta":{"desc":{"pt":"Faça seu login"},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"8615f915-bf33-409f-bd3c-987eeed2faea","linkId":"8615f915-bf33-409f-bd3c-987eeed2faea","name":"Alterar senha","folder":"Login/","paths":{"pt":"alterar-senha","default":"alterar-senha"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"7de8e5cd-6d2a-4e67-89b6-4fcd225c8e20","sectionTitle":"Login Container","linkId":"98052735-92cf-4e32-aa80-e50f923007f2"}],"pageUserGroups":[],"title":{"pt":"AppNotas - Login"},"meta":{"desc":{"pt":"Faça seu login"},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"f00d42a1-706c-4a47-b69a-c1f172b94744","linkId":"f00d42a1-706c-4a47-b69a-c1f172b94744","name":"Aluno","folder":null,"paths":{"pt":"aluno","default":"aluno"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"9b892ffd-c7f2-45f8-a84d-44350a98fa99","sectionTitle":"Container","linkId":"9cca19a7-912c-47d9-8156-d528fc854f1f"},{"uid":"f69dd8ef-b6e8-426b-b7b8-997cb26b31db","sectionTitle":"Sidemenu","linkId":"5f884db2-a36d-4468-98f7-6a940f06731c"}],"pageUserGroups":[{}],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"0890e054-8a5c-4eb0-9dc7-c47b4a6a88ab","linkId":"0890e054-8a5c-4eb0-9dc7-c47b4a6a88ab","name":"Matrículas","folder":null,"paths":{"pt":"matriculas","default":"matriculas"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"a3a63f72-6b61-4b79-9f89-9fde0ac8165c","sectionTitle":"Container","linkId":"c9525af8-cd98-4c35-8d1d-b670cbb7a628"},{"uid":"f69dd8ef-b6e8-426b-b7b8-997cb26b31db","sectionTitle":"Sidemenu","linkId":"5f884db2-a36d-4468-98f7-6a940f06731c"}],"pageUserGroups":[{},{"userGroup":{"id":"b2e2c012-8930-497f-8b79-c22068d9099f","roles":[{"value":"af5288f0-e7f3-47c7-ab8d-ca4f18551968"}]}}],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"989810b4-6ec5-417b-9a54-c1a4e28ef470","linkId":"989810b4-6ec5-417b-9a54-c1a4e28ef470","name":"Login","folder":"Login/","paths":{"pt":"login","default":"login"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"ad31f504-b71c-4d56-96c3-94ebdb739a77","sectionTitle":"Login Container","linkId":"cafe97b0-cc6a-44ea-9b0a-83e404bfeeae"}],"pageUserGroups":[],"title":{"pt":"AppNotas - Login"},"meta":{"desc":{"pt":"Faça seu login"},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 17;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes( //TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(process.env.VUE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
