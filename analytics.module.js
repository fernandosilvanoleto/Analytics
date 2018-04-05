'use strict';

var module = angular.module('analyticsModule', ['ngRoute', 'ngStorage', 'googlechart', 'chart.js']);

module.controller('AnalyticsController', function ($scope, $rootScope, $http, $location, $localStorage, Notification) {
    $http.get(API_BASE + 'analytics/anotacaoGrafico/lista')
        .success(function (anotacoes) {
            $rootScope.anotacoes = anotacoes;
        });

    $rootScope.salvarAnotacao = function (anotacao) {
        console.log(anotacao);
        $http.post(API_BASE + 'analytics/anotacaoGrafico/cadastro', anotacao)
            .success(function (response) {
                console.log(response)
                if (response) {
                    $http.get(API_BASE + 'analytics/anotacaoGrafico/lista')
                        .success(function (anotacoes) {
                            $rootScope.anotacoes = anotacoes;
                        });
                    Notification.success('Os dados foram salvos com sucesso!');
                } else {
                    Notification.error('Erro ao efetuar cadastro! Por favor tente novamente.');
                }
            }, function errorCallback(response) {
                Notification.error('Erro ao efetuar cadastro! Por favor tente novamente.');
            });
    };

    $rootScope.excluirAnotacao = function (anotacao) {
        if (confirm('Tem certeza que deseja excluir essa anotacao?')) {
            $http.delete(API_BASE + 'analytics/anotacaoGrafico/deleta/' + anotacao.idAnotacaoGrafico)
                .then(function (response) {
                    var index = 0;
                    for (; index < $rootScope.anotacoes.length; index++)
                        if ($rootScope.anotacoes[index] == anotacao)
                            break;
                    $rootScope.anotacoes.splice(index, 1);
                    Notification.success('Dado excluído com sucesso!');
                });
        }
    };
});

module.controller('InicialController', function ($scope, $http, $location, $localStorage) {
    $http.get(API_BASE + 'analytics/cursos/lista')
        .success(function (cursos) {
            $scope.cursos = cursos;
        });
    $scope.redirecionar = function (curso) {
        $location.path('analytics/cursos/' + curso.codigo);
    };
    $scope.redirecionarConteudos = function (id) {//NOVO CÓDIGO
        $scope.id = id;//NOVO CÓDIGO
        $location.path('analytics/analises-de-conteudos/' + $scope.id);//NOVO CÓDIGO
    };//NOVO CÓDIGO
});

module.controller('CursosController', function ($scope, $rootScope, $http, $location, $routeParams, $localStorage) {
    $scope.anotacaoGrafico1 = {};
    $scope.visivelGrafico1 = false;
    $scope.visivelDivGrafico1 = false;

    $scope.anotacaoGrafico2 = {};
    $scope.visivelGrafico2 = false;
    $scope.visivelDivGrafico2 = false;

    $scope.anotacaoGrafico3 = {};
    $scope.visivelGrafico3 = false;
    $scope.visivelDivGrafico3 = false;

    $scope.anotacaoGrafico4 = {};
    $scope.visivelGrafico4 = false;
    $scope.visivelDivGrafico4 = false;

    $scope.anotacaoGrafico5 = {};
    $scope.visivelGrafico5 = false;
    $scope.visivelDivGrafico5 = false;


    $scope.clickGrafico1 = function (points) {
        var idGrafico = 1;
        $scope.anotacaoGrafico1 = {};
        $scope.visivelGrafico1 = false;
        $scope.visivelDivGrafico1 = true;

        for (var i = 0; i < $rootScope.anotacoes.length; i++) {
            if ($rootScope.anotacoes[i].indiceDado == points[0]._index &&
                $rootScope.anotacoes[i].idGrafico == idGrafico &&
                $rootScope.anotacoes[i].tipo == 2 &&
                $rootScope.anotacoes[i].idRota == $routeParams.id &&
                $rootScope.anotacoes[i].tipo2 == 'Todos') {
                $scope.anotacaoGrafico1 = $rootScope.anotacoes[i];
                $scope.visivelGrafico1 = true;
                break;
            }
        }

        if (!$scope.visivelGrafico1) {
            $scope.anotacaoGrafico1 = {
                anotacao: '',
                indiceDado: points[0]._index,
                idGrafico: idGrafico,
                tipo: 2,
                idRota: $routeParams.id,
                tipo2: "Todos"
            };
        }

        if (!$scope.$$phase) $scope.$apply();
    };

    $scope.clickGrafico2 = function (points) {
        var idGrafico = 2;
        $scope.anotacaoGrafico2 = {};
        $scope.visivelGrafico2 = false;
        $scope.visivelDivGrafico2 = true;

        console.log(points);

        for (var i = 0; i < $rootScope.anotacoes.length; i++) {
            if ($rootScope.anotacoes[i].indiceDado == points[0]._index &&
                $rootScope.anotacoes[i].idGrafico == idGrafico &&
                $rootScope.anotacoes[i].tipo == 2 &&
                $rootScope.anotacoes[i].idRota == $routeParams.id &&
                $rootScope.anotacoes[i].tipo2 == 'Todos') {

                $scope.anotacaoGrafico2 = $rootScope.anotacoes[i];
                $scope.visivelGrafico2 = true;
                break;
            }
        }

        if (!$scope.visivelGrafico2) {
            $scope.anotacaoGrafico2 = {
                anotacao: '',
                indiceDado: points[0]._index,
                idGrafico: idGrafico,
                tipo: 2,
                idRota: $routeParams.id,
                tipo2: "Todos"
            };
        }

        if (!$scope.$$phase) $scope.$apply();
    };

    $scope.clickGrafico3 = function (points) {
        var idGrafico = 3;
        $scope.anotacaoGrafico3 = {};
        $scope.visivelGrafico3 = false;
        $scope.visivelDivGrafico3 = true;

        for (var i = 0; i < $rootScope.anotacoes.length; i++) {
            if ($rootScope.anotacoes[i].indiceDado == points[0]._index &&
                $rootScope.anotacoes[i].idGrafico == idGrafico &&
                $rootScope.anotacoes[i].tipo == 2 &&
                $rootScope.anotacoes[i].idRota == $routeParams.id &&
                $rootScope.anotacoes[i].tipo2 == 'Todos') {
                $scope.anotacaoGrafico3 = $rootScope.anotacoes[i];
                $scope.visivelGrafico3 = true;
                break;
            }
        }

        if (!$scope.visivelGrafico3) {
            $scope.anotacaoGrafico3 = {
                anotacao: '',
                indiceDado: points[0]._index,
                idGrafico: idGrafico,
                tipo: 2,
                idRota: $routeParams.id,
                tipo2: "Todos"
            };
        }

        if (!$scope.$$phase) $scope.$apply();
    };

    $scope.clickGrafico4 = function (points) {
        var idGrafico = 4;
        $scope.anotacaoGrafico4 = {};
        $scope.visivelGrafico4 = false;
        $scope.visivelDivGrafico4 = true;

        for (var i = 0; i < $rootScope.anotacoes.length; i++) {
            if ($rootScope.anotacoes[i].indiceDado == points[0]._index &&
                $rootScope.anotacoes[i].idGrafico == idGrafico &&
                $rootScope.anotacoes[i].tipo == 2 &&
                $rootScope.anotacoes[i].idRota == $routeParams.id &&
                $rootScope.anotacoes[i].tipo2 == 'Todos') {
                $scope.anotacaoGrafico4 = $rootScope.anotacoes[i];
                $scope.visivelGrafico4 = true;
                break;
            }
        }

        if (!$scope.visivelGrafico4) {
            $scope.anotacaoGrafico4 = {
                anotacao: '',
                indiceDado: points[0]._index,
                idGrafico: idGrafico,
                tipo: 2,
                idRota: $routeParams.id,
                tipo2: "Todos"
            };
        }

        if (!$scope.$$phase) $scope.$apply();
    };

    $scope.clickGrafico5 = function (points) {
        var idGrafico = 5;
        $scope.anotacaoGrafico5 = {};
        $scope.visivelGrafico5 = false;
        $scope.visivelDivGrafico5 = true;

        for (var i = 0; i < $rootScope.anotacoes.length; i++) {
            if ($rootScope.anotacoes[i].indiceDado == points[0]._index &&
                $rootScope.anotacoes[i].idGrafico == idGrafico &&
                $rootScope.anotacoes[i].tipo == 2 &&
                $rootScope.anotacoes[i].idRota == $routeParams.id &&
                $rootScope.anotacoes[i].tipo2 == $scope.cursoEmConteudo[$scope.indiceCombo].tipo) {
                $scope.anotacaoGrafico5 = $rootScope.anotacoes[i];
                $scope.visivelGrafico5 = true;
                break;
            }
        }

        if (!$scope.visivelGrafico5) {
            $scope.anotacaoGrafico5 = {
                anotacao: '',
                indiceDado: points[0]._index,
                idGrafico: idGrafico,
                tipo: 2,
                idRota: $routeParams.id,
                tipo2: $scope.cursoEmConteudo[$scope.indiceCombo].tipo
            };
        }

        if (!$scope.$$phase) $scope.$apply();
    };

    $scope.grafico1 = true;
    $scope.grafico2 = false;

    if ($routeParams.id) {//NOVO CÓDIGO
        $http.get(API_BASE + 'analytics/cursos/busca/' + $routeParams.id)//NOVO CÓDIGO
            .success(function (response) {//NOVO CÓDIGO
                $scope.cursos = response;//NOVO CÓDIGO
                $localStorage.cursoStorage = $scope.cursos;//NOVO CÓDIGO

            });//NOVO CÓDIGO
        $http.get(API_BASE + 'analytics/cursos/busca-topico/' + $routeParams.id)//NOVO CÓDIGO
            .success(function (response) {//NOVO CÓDIGO
                $scope.cursoTopicos = response;//NOVO CÓDIGO
                $localStorage.cursoTopicosStorage = $scope.cursoTopicos;//NOVO CÓDIGO
            });//NOVO CÓDIGO
        $http.get(API_BASE + 'analytics/cursos/aluno-curso/' + $routeParams.id)//NOVO CÓDIGO
            .success(function (response) {//NOVO CÓDIGO
                $scope.alunoCurso = response;//NOVO CÓDIGO
                $localStorage.alunoCursoStorage = $scope.alunoCurso;//NOVO CÓDIGO
            });//NOVO CÓDIGO
        $http.get(API_BASE + 'analytics/criterios/busca-curso/' + $routeParams.id)//NOVO CÓDIGO
            .success(function (response) {//NOVO CÓDIGO
                $scope.cursoCriterio = response;//NOVO CÓDIGO
                $localStorage.cursoCriterios = [];//NOVO CÓDIGO
                $localStorage.cursoCriterios = $scope.cursoCriterio;//NOVO CÓDIGO
                //$scope.preencherGraficoBarras();//NOVO CÓDIGO
            });//NOVO CÓDIGO
        $http.get(API_BASE + 'analytics/cursos/buscaCursoConteudo/' + $routeParams.id)//NOVO CÓDIGO
            .success(function (response) {//NOVO CÓDIGO
                $scope.cursoEmConteudo = response;//NOVO CÓDIGO
                $localStorage.cursoEmConteudos = [];//NOVO CÓDIGO
                $localStorage.cursoEmConteudos = $scope.cursoEmConteudo;//NOVO CÓDIGO
                $scope.preencherGraficoBarras();
            });//NOVO CÓDIGO
    }//NOVO CÓDIG
    
    $scope.preencherGraficoBarras = function () {//NOVO CÓDIGO
        $scope.grafico1 = true;
        $scope.grafico2 = false;
        $scope.labelsBarras = [];//NOVO CÓDIGO
        $scope.dataBarras = [];//NOVO CÓDIGO
        $scope.labelsGeral = ['Criados', 'Editados', 'Visualizados', 'Excluídos'];//NOVO CÓDIGO
        $scope.dataAreaEnquetes = [];//NOVO CÓDIGO
        $scope.dataAreaGuia = [];//NOVO CÓDIGO
        $scope.dataAreaSlide = [];//NOVO CÓDIGO
        $scope.dataAreaImagem = [];//NOVO CÓDIGO

        for (var i = 0; i < $localStorage.cursoEmConteudos.length; i++) {//NOVO CÓDIGO
            if ($localStorage.cursoEmConteudos[i].tipo == "Enquetes")//NOVO CÓDIGO
            {
                $scope.dataAreaEnquetes.push($localStorage.cursoEmConteudos[i].criados);//NOVO CÓDIGO
                $scope.dataAreaEnquetes.push($localStorage.cursoEmConteudos[i].editados);//NOVO CÓDIGO
                $scope.dataAreaEnquetes.push($localStorage.cursoEmConteudos[i].visualizados);//NOVO CÓDIGO
                $scope.dataAreaEnquetes.push($localStorage.cursoEmConteudos[i].excluidos);//NOVO CÓDIGO
            }//NOVO CÓDIGO
            if ($localStorage.cursoEmConteudos[i].tipo == "Guia de estudo")//NOVO CÓDIGO
            {//NOVO CÓDIGO
                $scope.dataAreaGuia.push($localStorage.cursoEmConteudos[i].criados);//NOVO CÓDIGO
                $scope.dataAreaGuia.push($localStorage.cursoEmConteudos[i].editados);//NOVO CÓDIGO
                $scope.dataAreaGuia.push($localStorage.cursoEmConteudos[i].visualizados);//NOVO CÓDIGO
                $scope.dataAreaGuia.push($localStorage.cursoEmConteudos[i].excluidos);//NOVO CÓDIGO
            }//NOVO CÓDIGO
            if ($localStorage.cursoEmConteudos[i].tipo == "Slides")//NOVO CÓDIGO
            {//NOVO CÓDIGO
                $scope.dataAreaSlide.push($localStorage.cursoEmConteudos[i].criados);//NOVO CÓDIGO
                $scope.dataAreaSlide.push($localStorage.cursoEmConteudos[i].editados);//NOVO CÓDIGO
                $scope.dataAreaSlide.push($localStorage.cursoEmConteudos[i].visualizados);//NOVO CÓDIGO
                $scope.dataAreaSlide.push($localStorage.cursoEmConteudos[i].excluidos);//NOVO CÓDIGO
            }//NOVO CÓDIGO
            if ($localStorage.cursoEmConteudos[i].tipo == "Imagens")//NOVO CÓDIGO
            {//NOVO CÓDIGO
                $scope.dataAreaImagem.push($localStorage.cursoEmConteudos[i].criados);//NOVO CÓDIGO
                $scope.dataAreaImagem.push($localStorage.cursoEmConteudos[i].editados);//NOVO CÓDIGO
                $scope.dataAreaImagem.push($localStorage.cursoEmConteudos[i].visualizados);//NOVO CÓDIGO
                $scope.dataAreaImagem.push($localStorage.cursoEmConteudos[i].excluidos);//NOVO CÓDIGO
            }//NOVO CÓDIGO
        }//NOVO CÓDIGO
    };//NOVO CÓDIGO

    $scope.redirecionar2 = function (curso) {//NOVO CÓDIGO
        $location.path('analytics/tabela/' + curso.codigo);//NOVO CÓDIGO
    };//NOVO CÓDIGO

    $scope.trocarConteudo = function (codigo) {//NOVO CÓDIGO
        $scope.grafico1 = false;//NOVO CÓDIGO
        $scope.grafico2 = true;//NOVO CÓDIGO
        $scope.conteudo = $scope.cursoEmConteudo[$scope.indiceCombo];//NOVO CÓDIGO
        $scope.labelsBarras = [];//NOVO CÓDIGO
        $scope.dataBarras = [];//NOVO CÓDIGO
        $scope.labelsBarras = ['Criados', 'Editados', 'Visualizados', 'Excluídos'];//NOVO CÓDIGO
        $scope.dataBarras.push($scope.conteudo.criados);//NOVO CÓDIGO
        $scope.dataBarras.push($scope.conteudo.editados);//NOVO CÓDIGO
        $scope.dataBarras.push($scope.conteudo.visualizados);//NOVO CÓDIGO
        $scope.dataBarras.push($scope.conteudo.excluidos);//NOVO CÓDIGO

        $scope.anotacaoGrafico5 = {};
        $scope.visivelGrafico5 = false;
        $scope.visivelDivGrafico5 = false;
    };
});

module.controller('ConteudosController', function ($scope, $rootScope, $http, $location, $routeParams, $localStorage) {
    $scope.anotacaoGrafico1 = {};
    $scope.visivelGrafico1 = false;
    $scope.visivelDivGrafico1 = false;

    $scope.anotacaoGrafico2 = {};
    $scope.visivelGrafico2 = false;
    $scope.visivelDivGrafico2 = false;

    $scope.anotacaoGrafico3 = {};
    $scope.visivelGrafico3 = false;
    $scope.visivelDivGrafico3 = false;

    $scope.anotacaoGrafico4 = {};
    $scope.visivelGrafico4 = false;
    $scope.visivelDivGrafico4 = false;

    $scope.clickGrafico1 = function (points) {
        var idGrafico = 1;
        $scope.anotacaoGrafico1 = {};
        $scope.visivelGrafico1 = false;
        $scope.visivelDivGrafico1 = true;

        for (var i = 0; i < $rootScope.anotacoes.length; i++) {
            if ($rootScope.anotacoes[i].indiceDado == points[0]._index &&
                $rootScope.anotacoes[i].idGrafico == idGrafico &&
                $rootScope.anotacoes[i].tipo == 1 &&
                $rootScope.anotacoes[i].idRota == $routeParams.id &&
                $rootScope.anotacoes[i].tipo2 == 'Todos') {
                $scope.anotacaoGrafico1 = $rootScope.anotacoes[i];
                $scope.visivelGrafico1 = true;
                break;
            }
        }

        if (!$scope.visivelGrafico1) {
            $scope.anotacaoGrafico1 = {
                anotacao: '',
                indiceDado: points[0]._index,
                idGrafico: idGrafico,
                tipo: 1,
                idRota: $routeParams.id,
                tipo2: "Todos"
            };
        }

        if (!$scope.$$phase) $scope.$apply();
    };

    $scope.clickGrafico2 = function (points) {
        var idGrafico = 2;
        $scope.anotacaoGrafico2 = {};
        $scope.visivelGrafico2 = false;
        $scope.visivelDivGrafico2 = true;

        console.log(points);

        for (var i = 0; i < $rootScope.anotacoes.length; i++) {
            if ($rootScope.anotacoes[i].indiceDado == points[0]._index &&
                $rootScope.anotacoes[i].idGrafico == idGrafico &&
                $rootScope.anotacoes[i].tipo == 1 &&
                $rootScope.anotacoes[i].idRota == $routeParams.id &&
                $rootScope.anotacoes[i].tipo2 == 'Todos') {

                $scope.anotacaoGrafico2 = $rootScope.anotacoes[i];
                $scope.visivelGrafico2 = true;
                break;
            }
        }

        if (!$scope.visivelGrafico2) {
            $scope.anotacaoGrafico2 = {
                anotacao: '',
                indiceDado: points[0]._index,
                idGrafico: idGrafico,
                tipo: 1,
                idRota: $routeParams.id,
                tipo2: "Todos"
            };
        }

        if (!$scope.$$phase) $scope.$apply();
    };

    $scope.clickGrafico3 = function (points) {
        var idGrafico = 3;
        $scope.anotacaoGrafico3 = {};
        $scope.visivelGrafico3 = false;
        $scope.visivelDivGrafico3 = true;

        for (var i = 0; i < $rootScope.anotacoes.length; i++) {
            if ($rootScope.anotacoes[i].indiceDado == points[0]._index &&
                $rootScope.anotacoes[i].idGrafico == idGrafico &&
                $rootScope.anotacoes[i].tipo == 1 &&
                $rootScope.anotacoes[i].idRota == $routeParams.id &&
                $rootScope.anotacoes[i].tipo2 == 'Todos') {
                $scope.anotacaoGrafico3 = $rootScope.anotacoes[i];
                $scope.visivelGrafico3 = true;
                break;
            }
        }

        if (!$scope.visivelGrafico3) {
            $scope.anotacaoGrafico3 = {
                anotacao: '',
                indiceDado: points[0]._index,
                idGrafico: idGrafico,
                tipo: 1,
                idRota: $routeParams.id,
                tipo2: "Todos"
            };
        }

        if (!$scope.$$phase) $scope.$apply();
    };

    $scope.clickGrafico4 = function (points) {
        var idGrafico = 4;
        $scope.anotacaoGrafico4 = {};
        $scope.visivelGrafico4 = false;
        $scope.visivelDivGrafico4 = true;

        for (var i = 0; i < $rootScope.anotacoes.length; i++) {
            if ($rootScope.anotacoes[i].indiceDado == points[0]._index &&
                $rootScope.anotacoes[i].idGrafico == idGrafico &&
                $rootScope.anotacoes[i].tipo == 1 &&
                $rootScope.anotacoes[i].idRota == $routeParams.id &&
                $rootScope.anotacoes[i].tipo2 == 'Todos') {
                $scope.anotacaoGrafico4 = $rootScope.anotacoes[i];
                $scope.visivelGrafico4 = true;
                break;
            }
        }

        if (!$scope.visivelGrafico4) {
            $scope.anotacaoGrafico4 = {
                anotacao: '',
                indiceDado: points[0]._index,
                idGrafico: idGrafico,
                tipo: 1,
                idRota: $routeParams.id,
                tipo2: "Todos"
            };
        }

        if (!$scope.$$phase) $scope.$apply();
    };

    if ($routeParams.id) {//NOVO CÓDIGO
        $http.get(API_BASE + 'analytics/cursos/buscaConteudo/' + $routeParams.id)//NOVO CÓDIGO
            .success(function (response) {//NOVO CÓDIGO
                $scope.conteudoCursos = response;//NOVO CÓDIGO
                $localStorage.listaConteudoCursos = [];//NOVO CÓDIGO
                $localStorage.listaConteudoCursos = $scope.conteudoCursos;//NOVO CÓDIGO
                $scope.preencherDadosConteudos();//NOVO CÓDIGO
            });//NOVO CÓDIGO
    }//NOVO CÓDIGO
    $http.get(API_BASE + 'analytics/cursos/lista')//NOVO CÓDIGO
        .success(function (cursos) {//NOVO CÓDIGO
            $scope.cursoData = cursos;//NOVO CÓDIGO
            $localStorage.cursosData = [];//NOVO CÓDIGO
            $localStorage.cursosData = $scope.cursoData;//NOVO CÓDIGO
            $scope.preencherLabels();//NOVO CÓDIGO
        });//NOVO CÓDIGO

    $scope.preencherLabels = function () {//NOVO CÓDIGO
        $scope.labelsBarras = [];//NOVO CÓDIGO
        for (var i = 0; i < $localStorage.cursosData.length; i++) {//NOVO CÓDIGO
            $scope.labelsBarras.push($localStorage.cursosData[i].nome);//NOVO CÓDIGO
        }//NOVO CÓDIGO
    };//NOVO CÓDIGO

    $scope.preencherDadosConteudos = function () {//NOVO CÓDIGO
        $scope.seriesBarras = [];//NOVO CÓDIGO
        $scope.dataCriados = [];//NOVO CÓDIGO
        $scope.dataEditados = [];//NOVO CÓDIGO
        $scope.dataVisualizados = [];//NOVO CÓDIGO
        $scope.dataExcluidos = [];//NOVO CÓDIGO
        $scope.data = [];//NOVO CÓDIGO
        for (var i = 0; i < $localStorage.listaConteudoCursos.length; i++) {//NOVO CÓDIGO
            $scope.dataCriados.push($localStorage.listaConteudoCursos[i].criados);//NOVO CÓDIGO
            $scope.dataEditados.push($localStorage.listaConteudoCursos[i].editados);//NOVO CÓDIGO
            $scope.dataVisualizados.push($localStorage.listaConteudoCursos[i].visualizados);//NOVO CÓDIGO
            $scope.dataExcluidos.push($localStorage.listaConteudoCursos[i].excluidos);//NOVO CÓDIGO
            //$scope.seriesBar.push($localStorage.cursoCriterios[i].nome);//NOVO CÓDIGO
        }//NOVO CÓDIGO
    };//NOVO CÓDIGO
});

module.controller('AnotacaoGraficoController', function ($scope, $rootScope, $http, $location) {
    $scope.visivelGrafico123 = false;
    $scope.visivelDivGrafico123 = false;

    $scope.anotacaoGrafico123 = {};

    $scope.labels = ["Criados", "Visualizados", "Editados"];
    $scope.data = [300, 500, 100];

    $scope.clickGrafico123 = function (points) {
        var idGrafico = 123;
        $scope.anotacaoGrafico123 = {};
        $scope.visivelGrafico123 = false;
        $scope.visivelDivGrafico123 = true;

        for (var i = 0; i < $rootScope.anotacoes.length; i++) {
            if ($rootScope.anotacoes[i].indiceDado == points[0]._index && $rootScope.anotacoes[i].idGrafico == idGrafico) {
                $scope.anotacaoGrafico123 = $rootScope.anotacoes[i];
                $scope.visivelGrafico123 = true;
                break;
            }
        }

        if (!$scope.visivelGrafico123) {
            $scope.anotacaoGrafico123 = {anotacao: '', indiceDado: points[0]._index, idGrafico: idGrafico};
        }

        if (!$scope.$$phase) $scope.$apply();
    };

});

module.controller('TabelaConteudoController', function ($scope, $http, $location, $routeParams, $localStorage) {

});

module.controller('TabelaController', function ($scope, $http, $location, $routeParams, $localStorage) {
    $scope.table1 = true;
    $scope.table2 = false;
    $scope.table3 = false;
    if ($routeParams.id) {
        $http.get(API_BASE + 'analytics/cursos/busca/' + $routeParams.id)
            .success(function (response) {
                $scope.cursoTabelaController = response;
                $localStorage.cursoStorage = $scope.cursoTabelaController;

            });
        $http.get(API_BASE + 'analytics/cursos/buscaCursoConteudo/' + $routeParams.id)//NOVO CÓDIGO
            .success(function (response) {//NOVO CÓDIGO
                $scope.cursoConteudoTabela = response;//NOVO CÓDIGO
                $localStorage.cursoConteudosTabela = [];//NOVO CÓDIGO
                $localStorage.cursoConteudosTabela = $scope.cursoConteudoTabela;//NOVO CÓDIGO
            });//NOVO CÓDIGO
    }
    $scope.gerarTabela = function (valor) {
        if (valor == 1) {
            $scope.table1 = true;
            $scope.table2 = false;
            $scope.table3 = false;
            $scope.descricao = "Nível do Curso:" + " " + $scope.cursoTabela.nome;
        } else if (valor == 2) {
            $scope.table1 = false;
            $scope.table2 = true;
            $scope.table3 = false;
            $scope.descricao = "Tópico do Curso:" + " " + $scope.cursoTabela.nome;
        } else if (valor == 3) {
            $scope.table1 = false;
            $scope.table2 = false;
            $scope.table3 = true;
            $scope.descricao = "Subtemas do Curso:" + " " + $scope.cursoTabela.nome;
        }
    };
    $scope.redirecionarGrafico = function (curso) {
        $location.path('analytics/cursos/' + curso.codigo);
    };


    $(document).ready(function () {
        (function ($) {
            $('#filter').keyup(function () {
                var rex = new RegExp($(this).val(), 'i');
                $('.searchable tr').hide();
                $('.searchable tr').filter(function () {
                    return rex.test($(this).text());
                }).show();
            })
        }(jQuery));
    });
    $("button").click(function () {
        $("#table2excel").table2excel({
            // exclude CSS class
            exclude: ".noExl",
            name: "Excel Document Name",
        });
    });
});

module.controller('CadastroCriteriosController', function ($scope, $http, $location, $routeParams, Notification) {
    if ($routeParams.id) {
        $http.get(API_BASE + 'analytics/criterios/busca/' + $routeParams.id)
            .success(function (response) {
                $scope.criterio = response;
            });
    }

    $http.get(API_BASE + 'analytics/cursos/cursosDoProfessor/lista')
        .success(function (cursos) {
            $scope.cursos = cursos;
        });


    $scope.salvar = function (criterio) {
        if($scope.form.$valid) {
            criterio.idCurso = $scope.cursos[$scope.indiceCombo].codigo;

            $http.post(API_BASE + 'analytics/criterios/cadastro', criterio)
                .success(function (response) {
                    console.log(response)
                    if (response) {
                        Notification.success('Os dados foram salvos com sucesso!');
                        $location.path('analytics/criterios/lista');
                    } else {
                        Notification.error('Erro ao efetuar cadastro! Por favor tente novamente.');
                    }
                }, function errorCallback(response) {
                    Notification.error('Erro ao efetuar cadastro! Por favor tente novamente.');
                });
        }
    };

    $scope.cancelar = function () {
        $location.path('/analytics/criterios/lista');
    }
});

module.controller('ListaCriteriosController', function ($scope, $http, $location) {
    $http.get(API_BASE + 'analytics/cursos/cursosDoProfessor/lista')
        .success(function (cursos) {
            $scope.cursos = cursos;
        });

    $http.get(API_BASE + 'analytics/criterios/lista')
        .success(function (criterios) {
            $scope.criterios = criterios;
        });

    $scope.excluir = function (criterio) {
        if (confirm('Tem certeza que deseja excluir o criterio ' + criterio.nome + '? Todas as avaliações desse criterios serão apagadas')) {
            $http.delete(API_BASE + 'analytics/criterios/deleta/' + criterio.id)
                .then(function (response) {
                    var index = 0;
                    for (; index < $scope.criterios.length; index++)
                        if ($scope.criterios[index] == criterio)
                            break;
                    $scope.criterios.splice(index, 1);

                    $scope.trocarCurso();
                });
        }

    };

    $scope.editar = function (criterio) {
        $location.path('analytics/criterios/' + criterio.id + '/editor');
    }

    $scope.criteriosAtual = [];

    $scope.trocarCurso = function () {
        var curso = $scope.cursos[$scope.indiceCombo];

        $scope.criteriosAtual = [];

        for (var i = 0; i < $scope.criterios.length; i++) {
            if ($scope.criterios[i].idCurso == curso.codigo) {
                $scope.criteriosAtual.push($scope.criterios[i]);
            }
        }
    };
});

module.controller('AvaliacaoCriteriosController', function ($scope, $http, $location, Notification) {
    $http.get(API_BASE + 'analytics/cursos/cursosDoProfessor/lista')
        .success(function (cursos) {
            $scope.cursos = cursos;
        });

    $http.get(API_BASE + 'analytics/usuario/lista')
        .success(function (alunos) {
            $scope.alunos = alunos;
        });

    $http.get(API_BASE + 'analytics/alunocurso/lista')
        .success(function (alunoscurso) {
            $scope.alunoscurso = alunoscurso;
        });

    $http.get(API_BASE + 'analytics/avaliacao/lista')
        .success(function (avaliacoes) {
            $scope.listaAvaliacoes = avaliacoes;
        });

    $http.get(API_BASE + 'analytics/criterios/lista')
        .success(function (criterios) {
            $scope.criterios = criterios;
        });

    $scope.criteriosAtual = [];
    $scope.avaliacoes = [];
    $scope.totais = [];
    $scope.copiaAvaliacoes = [];

    $scope.trocarCurso = function () {
        $http.get(API_BASE + 'analytics/avaliacao/lista')
            .success(function (avaliacoes) {
                $scope.listaAvaliacoes = avaliacoes;
            });

        var curso = $scope.cursos[$scope.indiceCombo];

        $scope.criteriosAtual = [];
        $scope.avaliacoes = [];

        for (var i = 0; i < $scope.criterios.length; i++) {
            if ($scope.criterios[i].idCurso == curso.codigo) {
                $scope.criteriosAtual.push($scope.criterios[i]);
            }
        }

        for (var i = 0; i < $scope.alunoscurso.length; i++) {
            if ($scope.alunoscurso[i].codigoCurso == curso.codigo) {
                var notas = [];
                var peso = [];
                var idAval = []
                for (var m = 0; m < $scope.criteriosAtual.length; m++) {
                    notas.push('');
                    idAval.push('');
                    peso.push('');
                }

                $scope.avaliacoes.push({
                    idAvaliacao: idAval,
                    idUsuario: $scope.alunoscurso[i].codigoUsuario,
                    nome: $scope.alunoscurso[i].nome,
                    notas: notas,
                    peso: peso
                });
            }
        }

        for (var i = 0; i < $scope.listaAvaliacoes.length; i++) {
            for (var j = 0; j < $scope.alunos.length; j++) {
                if ($scope.listaAvaliacoes[i].idUsuario == $scope.alunos[j].codigo && $scope.listaAvaliacoes[i].idCurso == curso.codigo) {
                    for (var n = 0; n < $scope.avaliacoes.length; n++) {
                        if ($scope.avaliacoes[n].idUsuario == $scope.listaAvaliacoes[i].idUsuario) {
                            for (var m = 0; m < $scope.criteriosAtual.length; m++) {
                                if ($scope.criteriosAtual[m].id == $scope.listaAvaliacoes[i].idCriterios) {
                                    $scope.avaliacoes[n].notas[m] = $scope.listaAvaliacoes[i].valor;
                                    $scope.avaliacoes[n].idAvaliacao[m] = $scope.listaAvaliacoes[i].idAvaliacao;
                                    $scope.avaliacoes[n].nome = $scope.alunos[j].nome;
                                    $scope.avaliacoes[n].peso[m] = $scope.criteriosAtual[m].peso;
                                    break;
                                }
                            }
                            break;
                        }
                    }
                }
            }
        }

        for (var i = 0; i < $scope.avaliacoes.length; i++) {
            var soma = 0;
            for (var j = 0; j < $scope.avaliacoes[i].notas.length; j++) {
                if ($scope.avaliacoes[i].notas[j] != '') {
                    soma += parseInt($scope.avaliacoes[i].notas[j]);
                }
            }
            $scope.avaliacoes[i].total = soma;
        }
        $scope.copiaAvaliacoes = angular.copy($scope.avaliacoes);
    };

    $scope.searchFish = '';

    $scope.salvar = function () {
        var error = false;
        console.log($scope.avaliacoes);
        for (var i = 0; i < $scope.avaliacoes.length; i++) {
            for (var j = 0; j < $scope.avaliacoes[i].notas.length; j++) {
                if ($scope.avaliacoes[i].notas[j] != $scope.copiaAvaliacoes[i].notas[j]) {
                    if($scope.avaliacoes[i].notas[j] != '' && parseInt($scope.avaliacoes[i].notas[j]) > parseInt($scope.avaliacoes[i].peso[j])){
                        $scope.avaliacoes[i].notas[j] = $scope.copiaAvaliacoes[i].notas[j];
                        error = true;
                    } else if ($scope.copiaAvaliacoes[i].notas[j] != '') {
                        if(parseInt($scope.avaliacoes[i].notas[j]) > parseInt($scope.avaliacoes[i].peso[j])){
                            $scope.avaliacoes[i].notas[j] = $scope.copiaAvaliacoes[i].notas[j];
                            error = true;
                        } else {
                            var avaliacao = {
                                valor: $scope.avaliacoes[i].notas[j],
                                id: $scope.avaliacoes[i].idAvaliacao[j],
                                idCriterios: '',
                                idUsuario: ''
                            };
                        }
                    } else {
                        var avaliacao = {
                            valor: $scope.avaliacoes[i].notas[j],
                            idCriterios: $scope.criteriosAtual[j].id,
                            idUsuario: $scope.avaliacoes[i].idUsuario
                        };
                    }

                    if(!error) {
                        $http.post(API_BASE + 'analytics/avaliacao/cadastro', avaliacao)
                            .success(function (response) {
                                console.log(response)
                                if (!response) {
                                    error = true;
                                }
                            }, function errorCallback(response) {
                                error = true;
                            });
                    }
                }
            }
        }
        if (error)
            Notification.error('Erro as salvar alguns dados! Por favor tente novamente.');
        else
            Notification.success('Todos os dados foram salvos com sucesso');

        for (var i = 0; i < $scope.avaliacoes.length; i++) {
            var soma = 0;
            for (var j = 0; j < $scope.avaliacoes[i].notas.length; j++) {
                if ($scope.avaliacoes[i].notas[j] != '') {
                    soma += parseInt($scope.avaliacoes[i].notas[j]);
                }
            }
            $scope.avaliacoes[i].total = soma;
        }
    };
});

module.controller('FilterController', function ($scope, $http, $location) {//excluir

    $scope.alteraTabela = function () {
        alert("Deu certo!");
    };
    $(document).ready(function () {
        (function ($) {
            $('#filter').keyup(function () {
                var rex = new RegExp($(this).val(), 'i');
                $('.searchable tr').hide();
                $('.searchable tr').filter(function () {
                    return rex.test($(this).text());
                }).show();
            })
        }(jQuery));
    });
    $("button").click(function () {
        $("#table2excel").table2excel({
            // exclude CSS class
            exclude: ".noExl",
            name: "Excel Document Name",
        });
    });
});

module.controller('TelaInicialController', function ($rootScope, $scope, $http, $location, $localStorage) {
    $scope.anotacaoGrafico1 = {};
    $scope.visivelGrafico1 = false;
    $scope.visivelDivGrafico1 = false;

    $scope.clickGrafico1 = function (points) {
        var idGrafico = 1;
        $scope.anotacaoGrafico1 = {};
        $scope.visivelGrafico1 = false;
        $scope.visivelDivGrafico1 = true;

        for (var i = 0; i < $rootScope.anotacoes.length; i++) {
            if ($rootScope.anotacoes[i].indiceDado == points[0]._index &&
                $rootScope.anotacoes[i].idGrafico == idGrafico &&
                $rootScope.anotacoes[i].tipo == 3 &&
                $rootScope.anotacoes[i].idRota == -1 &&
                $rootScope.anotacoes[i].tipo2 == 'Todos') {
                $scope.anotacaoGrafico1 = $rootScope.anotacoes[i];
                $scope.visivelGrafico1 = true;
                break;
            }
        }

        if (!$scope.visivelGrafico1) {
            $scope.anotacaoGrafico1 = {
                anotacao: '',
                indiceDado: points[0]._index,
                idGrafico: idGrafico,
                tipo: 3,
                idRota: -1,
                tipo2: "Todos"
            };
        }

        if (!$scope.$$phase) $scope.$apply();
    };

    $localStorage.labelsBar = [];//usar esses três em todos os módulos desse controller
    $localStorage.seriesBar = [];
    $localStorage.dataBar = [];
    $localStorage.labelsArea = [];
    $localStorage.seriesArea = [];
    $localStorage.dataArea = [];
    $http.get(API_BASE + 'analytics/cursos/lista')
        .success(function (cursos) {
            $scope.cursos = cursos;
        });
    $http.get(API_BASE + 'analytics/criterios/lista')
        .success(function (criterios) {
            $scope.criterios = criterios;
            $localStorage.dados = $scope.criterios;
        });

    for (var i = 0; i < $localStorage.dados.length; i++) {
        $localStorage.labelsBar.push($localStorage.dados[i].sigla);
        $localStorage.labelsArea.push($localStorage.dados[i].sigla);
        $localStorage.seriesBar.push($localStorage.dados[i].nome);
        $localStorage.seriesArea.push($localStorage.dados[i].nome);
        $localStorage.dataBar.push($localStorage.dados[i].peso);
        $localStorage.dataArea.push($localStorage.dados[i].peso);
    }
    $scope.labels = [];
    $scope.series = [];
    $scope.data = [];
    for (var i = 0; i < $localStorage.labelsBar.length; i++) {
        $scope.labels.push($localStorage.labelsBar[i]);
    }
    for (var i = 0; i < $localStorage.seriesBar.length; i++) {
        $scope.series.push($localStorage.seriesBar[i]);
    }
    for (var i = 0; i < $localStorage.dataBar.length; i++) {
        $scope.data.push($localStorage.dataBar[i]);
    }
});

module.controller("LineCtrl", function ($scope, $rootScope) {
    $scope.anotacaoGrafico2 = {};
    $scope.visivelGrafico2 = false;
    $scope.visivelDivGrafico2 = false;

    $scope.clickGrafico2 = function (points) {
        var idGrafico = 2;
        $scope.anotacaoGrafico2 = {};
        $scope.visivelGrafico2 = false;
        $scope.visivelDivGrafico2 = true;

        for (var i = 0; i < $rootScope.anotacoes.length; i++) {
            if ($rootScope.anotacoes[i].indiceDado == points[0]._index &&
                $rootScope.anotacoes[i].idGrafico == idGrafico &&
                $rootScope.anotacoes[i].tipo == 3 &&
                $rootScope.anotacoes[i].idRota == -1 &&
                $rootScope.anotacoes[i].tipo2 == 'Todos') {
                $scope.anotacaoGrafico2 = $rootScope.anotacoes[i];
                $scope.visivelGrafico2 = true;
                break;
            }
        }

        if (!$scope.visivelGrafico2) {
            $scope.anotacaoGrafico2 = {
                anotacao: '',
                indiceDado: points[0]._index,
                idGrafico: idGrafico,
                tipo: 3,
                idRota: -1,
                tipo2: "Todos"
            };
        }

        if (!$scope.$$phase) $scope.$apply();
    };

    $scope.labels = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56],
        [28, 48, 40, 19, 86]
    ];
    $scope.onClick = function (a, b) {
        console.log(a, b);
    };
    $scope.datasetOverride = [{yAxisID: 'y-axis-1'}, {yAxisID: 'y-axis-2'}];
    $scope.options = {
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                },
                {
                    id: 'y-axis-2',
                    type: 'linear',
                    display: true,
                    position: 'right'
                }
            ]
        }
    };
});

module.controller("DoughnutCtrl", function ($scope) {
    $scope.labels = ["Criados", "Visualizados", "Editados"];
    $scope.data = [300, 500, 100];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
});

module.controller("RadarCtrl", function ($scope, $rootScope) {
    $scope.anotacaoGrafico3 = {};
    $scope.visivelGrafico3 = false;
    $scope.visivelDivGrafico3 = false;

    $scope.clickGrafico3 = function (points) {
        var idGrafico = 3;
        $scope.anotacaoGrafico3 = {};
        $scope.visivelGrafico3 = false;
        $scope.visivelDivGrafico3 = true;

        for (var i = 0; i < $rootScope.anotacoes.length; i++) {
            if ($rootScope.anotacoes[i].indiceDado == points[0]._index &&
                $rootScope.anotacoes[i].idGrafico == idGrafico &&
                $rootScope.anotacoes[i].tipo == 3 &&
                $rootScope.anotacoes[i].idRota == -1 &&
                $rootScope.anotacoes[i].tipo2 == 'Todos') {
                $scope.anotacaoGrafico3 = $rootScope.anotacoes[i];
                $scope.visivelGrafico3 = true;
                break;
            }
        }

        if (!$scope.visivelGrafico3) {
            $scope.anotacaoGrafico3 = {
                anotacao: '',
                indiceDado: points[0]._index,
                idGrafico: idGrafico,
                tipo: 3,
                idRota: -1,
                tipo2: "Todos"
            };
        }

        if (!$scope.$$phase) $scope.$apply();
    };

    $scope.labels = ["Assiduidade", "Racioncínio Lógico", "Interpretação de texto", "Pró-atividade", "Participação"];
    $scope.data = [
        [65, 59, 90, 81, 56],
        [28, 48, 40, 19, 96]
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
});

module.controller("PieCtrl", function ($scope) {
    $scope.labels = ["Criados", "Visualizados", "Editados"];
    $scope.data = [300, 500, 100];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
});

module.controller("PolarAreaCtrl", function ($scope, $localStorage, $rootScope) {
    $scope.anotacaoGrafico4 = {};
    $scope.visivelGrafico4 = false;
    $scope.visivelDivGrafico4 = false;

    $scope.clickGrafico4 = function (points) {
        var idGrafico = 4;
        $scope.anotacaoGrafico4 = {};
        $scope.visivelGrafico4 = false;
        $scope.visivelDivGrafico4 = true;

        for (var i = 0; i < $rootScope.anotacoes.length; i++) {
            if ($rootScope.anotacoes[i].indiceDado == points[0]._index &&
                $rootScope.anotacoes[i].idGrafico == idGrafico &&
                $rootScope.anotacoes[i].tipo == 3 &&
                $rootScope.anotacoes[i].idRota == -1 &&
                $rootScope.anotacoes[i].tipo2 == 'Todos') {
                $scope.anotacaoGrafico4 = $rootScope.anotacoes[i];
                $scope.visivelGrafico4 = true;
                break;
            }
        }

        if (!$scope.visivelGrafico4) {
            $scope.anotacaoGrafico4 = {
                anotacao: '',
                indiceDado: points[0]._index,
                idGrafico: idGrafico,
                tipo: 3,
                idRota: -1,
                tipo2: "Todos"
            };
        }

        if (!$scope.$$phase) $scope.$apply();
    };

    $scope.labels = [];
    $scope.series = [];
    $scope.data = [];
    for (var i = 0; i < $localStorage.labelsArea.length; i++) {
        $scope.labels.push($localStorage.labelsArea[i]);
    }
    for (var i = 0; i < $localStorage.seriesArea.length; i++) {
        $scope.series.push($localStorage.seriesArea[i]);
    }
    for (var i = 0; i < $localStorage.dataArea.length; i++) {
        $scope.data.push($localStorage.dataArea[i]);
    }
});
