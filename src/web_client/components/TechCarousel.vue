<script setup lang="ts">
import TechCarouselCard from './TechCarouselCard.vue';
import nginxLogo from '@/assets/icons/logo_lib/nginx-svgrepo-com.svg';
import awsLogo from '@/assets/icons/logo_lib/amazonwebservices-original-wordmark.svg';
import djangoLogo from '@/assets/icons/logo_lib/django-plain-wordmark.svg';
import apacheLogo from '@/assets/icons/logo_lib/apache-original.svg';
import azureLogo from '@/assets/icons/logo_lib/azure-original.svg';
import cloudflareLogo from '@/assets/icons/logo_lib/cloudflare-original.svg';
import coffeescriptLogo from '@/assets/icons/logo_lib/coffeescript-original.svg';
import cplusplusLogo from '@/assets/icons/logo_lib/cplusplus-original.svg';
import electronLogo from '@/assets/icons/logo_lib/electron-original.svg';
import fastapiLogo from '@/assets/icons/logo_lib/fastapi-original.svg';
import firebaseLogo from '@/assets/icons/logo_lib/firebase-original.svg';
import flutterLogo from '@/assets/icons/logo_lib/flutter-original.svg';
import graphqlLogo from '@/assets/icons/logo_lib/graphql-plain.svg';
import grpcLogo from '@/assets/icons/logo_lib/grpc-original.svg';
import herokuLogo from '@/assets/icons/logo_lib/heroku-original.svg';
import matplotlibLogo from '@/assets/icons/logo_lib/matplotlib-original.svg';
import mongodbLogo from '@/assets/icons/logo_lib/mongodb-original-wordmark.svg';
import mysqlLogo from '@/assets/icons/logo_lib/mysql-original-wordmark.svg';
import netlifyLogo from '@/assets/icons/logo_lib/netlify-original.svg';
import nextjsLogo from '@/assets/icons/logo_lib/nextjs-original-wordmark.svg';
import nodejsLogo from '@/assets/icons/logo_lib/nodejs-original-wordmark.svg';
import numpyLogo from '@/assets/icons/logo_lib/numpy-original.svg';
import nuxtjsLogo from '@/assets/icons/logo_lib/nuxtjs-original.svg';
import postgresqlLogo from '@/assets/icons/logo_lib/postgresql-original.svg';
import pythonanywhereLogo from '@/assets/icons/logo_lib/pythonanywhere.svg';
import pytorchLogo from '@/assets/icons/logo_lib/pytorch-original.svg';
import QSMLogo from '@/assets/icons/logo_lib/QSM.svg';
import railsLogo from '@/assets/icons/logo_lib/rails-plain-wordmark.svg';
import reactLogo from '@/assets/icons/logo_lib/react-original.svg';
import redisLogo from '@/assets/icons/logo_lib/redis-original.svg';
import rustLogo from '@/assets/icons/logo_lib/rust-original.svg';
import scikitLearnLogo from '@/assets/icons/logo_lib/scikitlearn-original.svg';
import tailwindcssLogo from '@/assets/icons/logo_lib/tailwindcss-original.svg';
import tensorflowLogo from '@/assets/icons/logo_lib/tensorflow-original.svg';
import trpcLogo from '@/assets/icons/logo_lib/trpc-original.svg';
import typescriptLogo from '@/assets/icons/logo_lib/typescript-original.svg';
import vitejsLogo from '@/assets/icons/logo_lib/vitejs-original.svg';
import vuejsLogo from '@/assets/icons/logo_lib/vuejs-original.svg';
import webpackLogo from '@/assets/icons/logo_lib/webpack-original.svg';
import rubyLogo from '@/assets/icons/logo_lib/ruby-plain.svg';
import csharpLogo from '@/assets/icons/logo_lib/csharp-original.svg';
import pythonLogo from '@/assets/icons/logo_lib/python-original.svg';
import javascriptLogo from '@/assets/icons/logo_lib/javascript-original.svg';

const carouselItems = [
	{ icon: nginxLogo, link: 'https://nginx.org' },
	{ icon: awsLogo, link: 'https://aws.amazon.com' },
	{ icon: djangoLogo, link: 'https://www.djangoproject.com' },
	{ icon: apacheLogo, link: 'https://httpd.apache.org' },
	{ icon: azureLogo, link: 'https://azure.microsoft.com' },
	{ icon: cloudflareLogo, link: 'https://www.cloudflare.com' },
	{ icon: coffeescriptLogo, link: 'https://coffeescript.org' },
	{ icon: cplusplusLogo, link: 'https://isocpp.org' },
	{ icon: electronLogo, link: 'https://www.electronjs.org' },
	{ icon: fastapiLogo, link: 'https://fastapi.tiangolo.com' },
	{ icon: firebaseLogo, link: 'https://firebase.google.com' },
	{ icon: flutterLogo, link: 'https://flutter.dev' },
	{ icon: graphqlLogo, link: 'https://graphql.org' },
	{ icon: grpcLogo, link: 'https://grpc.io' },
	{ icon: herokuLogo, link: 'https://www.heroku.com' },
	{ icon: matplotlibLogo, link: 'https://matplotlib.org' },
	{ icon: mongodbLogo, link: 'https://www.mongodb.com' },
	{ icon: mysqlLogo, link: 'https://www.mysql.com' },
	{ icon: netlifyLogo, link: 'https://www.netlify.com' },
	{ icon: nextjsLogo, link: 'https://nextjs.org' },
	{ icon: nodejsLogo, link: 'https://nodejs.org' },
	{ icon: numpyLogo, link: 'https://numpy.org' },
	{ icon: nuxtjsLogo, link: 'https://nuxtjs.org' },
	{ icon: postgresqlLogo, link: 'https://www.postgresql.org' },
	{ icon: pythonanywhereLogo, link: 'https://www.pythonanywhere.com' },
	{ icon: pytorchLogo, link: 'https://pytorch.org' },
	{ icon: QSMLogo, link: 'https://github.com/MadScrewdriver/qsketchmetric' },
	{ icon: railsLogo, link: 'https://rubyonrails.org' },
	{ icon: reactLogo, link: 'https://reactjs.org' },
	{ icon: redisLogo, link: 'https://redis.io' },
	{ icon: rustLogo, link: 'https://www.rust-lang.org' },
	{ icon: scikitLearnLogo, link: 'https://scikit-learn.org' },
	{ icon: tailwindcssLogo, link: 'https://tailwindcss.com' },
	{ icon: tensorflowLogo, link: 'https://www.tensorflow.org' },
	{ icon: trpcLogo, link: 'https://trpc.io' },
	{ icon: typescriptLogo, link: 'https://www.typescriptlang.org' },
	{ icon: vitejsLogo, link: 'https://vitejs.dev' },
	{ icon: vuejsLogo, link: 'https://vuejs.org' },
	{ icon: webpackLogo, link: 'https://webpack.js.org' },
	{ icon: rubyLogo, link: 'https://www.ruby-lang.org' },
	{ icon: csharpLogo, link: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
	{ icon: pythonLogo, link: 'https://www.python.org' },
	{ icon: javascriptLogo, link: 'https://www.javascript.com' },
];
</script>
<template>
	<div class="relative flex flex-row items-center h-[12rem] overflow-hidden">
		<div class="carousel absolute flex flex-row justify-start items-center h-[12rem] w-max p-0">
			<div v-for="(item, index) in carouselItems" :key="index" class="h-full w-min">
				<!--<ClientOnly>-->
				<TechCarouselCard :icon="item.icon" :link="item.link" class="h-full" />
				<!--</ClientOnly>-->
			</div>
			<div v-for="(item, index) in carouselItems" :key="index" class="h-full w-min">
				<!--<ClientOnly>-->
				<TechCarouselCard :icon="item.icon" :link="item.link" class="h-full" />
				<!--</ClientOnly>-->
			</div>
		</div>
	</div>
</template>
<style scoped>
.carousel {
	animation-name: carouselAnimation;
	animation-duration: 90s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
}

@keyframes carouselAnimation {
	0% {
		transform: translateX(0%);
	}
	100% {
		transform: translateX(-50%);
	}
}
</style>
