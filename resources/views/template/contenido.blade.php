    @extends('app')
        @section('contenido')          
             <template v-if="menu==0">
               <h1>Dahsboard</h1>
            </template>

            <template v-if="menu==1">
               <h1>Categoria</h1>
            </template>

            <template v-if="menu==2">
                <h1>Articulo</h1>
            </template>

            <template v-if="menu==3">
                <h1>Ingreso</h1>
            </template>

            <template v-if="menu==4">
                <h1>Proveedor</h1>
            </template>

            <template v-if="menu==5">
                <h1>Venta</h1>
            </template>

            <template v-if="menu==6">
                <h1>Cliente</h1>
            </template>

            <template v-if="menu==7">
                <h1>Usuario</h1>
            </template>

            <template v-if="menu==8">
                <h1>rol</h1>
            </template>

            <template v-if="menu==9">
                <h1>Ingresos</h1>
            </template>

            <template v-if="menu==10">
                <h1>Ventas</h1>
            </template>

            <template v-if="menu==11">
                <h1>Ayuda</h1>
            </template>

            <template v-if="menu==12">
                <h1>Acerca de...</h1>
            </template>
     @endsection