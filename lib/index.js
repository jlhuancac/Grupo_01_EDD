import {Lista} from './lista.js';
import {bootbox_prompt, bootbox_alert} from './dialog.js';

let lista=null;

export async function agregar(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);
        lista.canvas=canvas;//despues contructor			
    }
    var DATO = await bootbox_prompt("Ingrese valor de nodo");
    if(DATO == null)
        return;

    try{
        if(lista.buscar(DATO) == true){
            throw new Error("EL NODO YA SE INGRESO...");
        }
        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    }catch(e){
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////

export async function insertar_al_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    /*var DATO = await bootbox_prompt("Ingrese valor de nodo");
    if(DATO == null)
        return;
    */
    try{
        if(lista.isVacio() == true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var DATO = await bootbox_prompt("Ingrese valor de nodo");
        if(DATO == null){
            return;
        }

        if(lista.buscar(DATO) == true){
            throw new Error("EL NODO YA SE INGRESO...");  
        }
        lista.inserta_final(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    }catch(e){
        await bootbox_alert(e.message);
    }
}//////////////////////////////////////////////////////////

export async function insertar_antes_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor
    }	
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        var DATO = await bootbox_prompt("Ingrese valor de DATO");
        if(DATO == null)
            return;

        if(lista.buscar(DATO) == true){
            throw new Error("EL NODO YA SE INGRESO...");
        }

        var X = await bootbox_prompt("Ingrese valor de X");
        if(X == null)
            return;

        lista.inserta_antes_X(DATO,X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    }catch(err){
        await bootbox_alert(err.message);
    }
}/////////////////////////////////////////////////////////

export async function insertar_despues_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }

        var DATO = await bootbox_prompt("Ingrese valor de DATO");
        if(DATO == null)
            return;

        if(lista.buscar(DATO) == true){
            throw new Error("EL NODO YA SE INGRESO...");
        }

        var X = await bootbox_prompt("Ingrese valor de X");
        if(X == null)
            return;

        lista.inserta_despues_X(DATO,X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    }catch(err){
        await bootbox_alert(err.message);
    }   
}///////////////////////////////////////////////////////////

export async function elimina_inicio(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        lista.elimina_inicio();
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
    }catch(e){
        await bootbox_alert(e.message);
    }
}///////////////////////////////////////////////////////////

export async function elimina_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        lista.elimina_final();
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
    }catch(e){
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////////

export async function elimina_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var X = await bootbox_prompt("Ingrese valor de X");
        if(X == null)
            return;

        lista.elimina_X(X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
    }catch(err){
        await bootbox_alert(err.message);
    }
}////////////////////////////////////////////////////////////

export async function elimina_antes_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var X = await bootbox_prompt("Ingrese valor de X");
        if(X == null)
            return;

        lista.elimina_antes_X(X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
    }catch(err){
        await bootbox_alert(err.message);
    }
}////////////////////////////////////////////////////////////

export async function elimina_despues_X(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista();	
        lista.canvas=canvas;//despues contructor	
    }
    try{
        if(lista.isVacio()==true){//la lista esta vacia
            throw new Error("LA LISTA ESTA VACIA");
        }
        var X = await bootbox_prompt("Ingrese valor de X");
        if(X == null)
            return;

        lista.elimina_despues_X(X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
        await bootbox_alert("NODO ELIMINADO SATISFACTORIAMENTE");
    }catch(err){
        await bootbox_alert(err.message);
    }
}/////////////////////////////////////////////////////////////



