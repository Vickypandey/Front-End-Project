"use strict";

angular
    .module('MyApp')
    .controller('LoginCtrl', function($scope) {
        $scope.data = [{
                'id': 1,
                'client': "client1",
                'profile_hit_count': '2000',
                'search_id': '55',
                'loggedin_active': 'True',
                'email_counts': '5000',
                'email_response': '6000',
                'candidate': 'John'

            },
            {
                'id': 2,
                'client': "client2",
                'profile_hit_count': '3000',
                'search_id': '50',
                'loggedin_active': 'True',
                'email_counts': '6300',
                'email_response': '7000',
                'candidate': 'Michel'

            },
            {
                'id': 3,
                'client': "client3",
                'profile_hit_count': '4000',
                'search_id': '60',
                'loggedin_active': 'False',
                'email_counts': '6800',
                'email_response': '8000',
                'candidate': 'Rossel'

            },
            {
                'id': 4,
                'client': "client4",
                'profile_hit_count': '5000',
                'search_id': '44',
                'loggedin_active': 'True',
                'email_counts': '7200',
                'email_response': '9000',
                'candidate': 'Adam bey'

            },
            {
                'id': 5,
                'client': "Client5",
                'profile_hit_count': '6000',
                'search_id': '80',
                'loggedin_active': 'False',
                'email_counts': '57886',
                'email_response': '67578',
                'candidate': 'Vicky'

            },
            {
                'id': 6,
                'client': "Client6",
                'profile_hit_count': '',
                'search': '',
                'loggedin_active': '',
                'email_counts': '',
                'email_response': '',
                'candidate': ''

            },
            {
                'id': 7,
                'client': "",
                'profile_hit_count': '',
                'search': '',
                'loggedin_active': '',
                'email_counts': '',
                'email_response': '',
                'candidate': ''

            },
            {
                'id': 8,
                'client': "",
                'profile_hit_count': '',
                'search': '',
                'loggedin_active': '',
                'email_counts': '',
                'email_response': '',
                'candidate': ''

            },
            {
                'id': 9,
                'client': "",
                'profile_hit_count': '',
                'search': '',
                'loggedin_active': '',
                'email_counts': '',
                'email_response': '',
                'candidate': ''

            },
            {
                'id': 10,
                'client': "",
                'profile_hit_count': '',
                'search': '',
                'loggedin_active': '',
                'email_counts': '',
                'email_response': '',
                'candidate': ''

            },

        ];

        $scope.removeItem = function($index) {

            $scope.data.splice($index, 1)
        };

        $scope.addRow = function(){     
            $scope.companies.push({ 'id':$scope.id, 'client': $scope.client, 'profile_hit_count':$scope.profile_hit_count });
            $scope.id='';
            $scope.client='';
            $scope.profile_hit_count='';
        };

    });