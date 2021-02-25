import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/features',
    name: 'Features',
    component: () => import('../views/features.vue')
  },
  {
    path: '/materialReleaseVerification',
    name: 'MaterialReleaseVerification',
    component: () => import('../views/materialReleaseVerification.vue')
  },
  {
    path: '/materialCoding',
    name: 'MaterialCoding',
    component: () => import('../views/materialCoding.vue')
  },
  {
    path: '/releaseDetails',
    name: 'ReleaseDetails',
    component: () => import('../views/releaseDetails.vue')
  },
  {
    path: '/materialCodingPrinting',
    name: 'MaterialCodingPrinting',
    component: () => import('../views/materialCodingPrinting.vue')
  },
  {
    path: '/powderDispensingScan',
    name: 'PowderDispensingScan',
    component: () => import('../views/powderDispensingScan.vue')
  },
  {
    path: '/scanResults',
    name: 'ScanResults',
    component: () => import('../views/scanResults.vue')
  },
  {
    path: '/barCodeReplacement',
    name: 'BarCodeReplacement',
    component: () => import('../views/barCodeReplacement.vue')
  },
  {
    path: '/barCodeReplacementPrint',
    name: 'BarCodeReplacementPrint',
    component: () => import('../views/barCodeReplacementPrint.vue')
  },
  {
    path: '/recipeDetails',
    name: 'RecipeDetails',
    component: () => import('../views/recipeDetails.vue')
  },
  {
    path: '/addRecipeDetails',
    name: 'AddRecipeDetails',
    component: () => import('../views/addRecipeDetails.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, frm, next) => {
  if((frm.path === '/scanResults' && to.path === '/powderDispensingScan') || (frm.path === '/scanResults' && to.path === '/barCodeReplacement') || (frm.path === '/scanResults' && to.path === '/recipeDetails') || (frm.path === '/barCodeReplacementPrint' && to.path === '/barCodeReplacement') || (frm.path === '/addRecipeDetails' && to.path === '/recipeDetails')){
    next({path:"/features"});
  }else{
    next();
  }
});

export default router
